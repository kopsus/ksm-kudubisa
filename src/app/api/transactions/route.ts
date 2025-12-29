import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { verifyToken } from "../middleware/verifyToken";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const decoded = await verifyToken(request);
    if (decoded instanceof Response) {
      return decoded;
    }

    const userProfile = decoded;

    const { id: userId, role, rt: userRt } = userProfile;
    console.log("Data profile", userProfile);

    // 2. Siapkan klausa 'where' untuk query Prisma
    let whereClause = {};

    // 3. Terapkan logika filter berdasarkan role
    switch (role) {
      case "Masyarakat":
        // Hanya tampilkan transaksi yang dibuat oleh user ini
        whereClause = {
          userId: userId,
        };
        break;

      case "Agen":
        // Tampilkan transaksi dari user yang punya RT sama dengan Agen
        // Pastikan Agen punya RT
        if (!userRt) {
          return ResponseHandler.notFound("Agen tidak memiliki data RT.");
        }
        whereClause = {
          user: {
            rt: userRt,
          },
        };
        break;

      case "Pengepul":
        // Tampilkan transaksi yang sudah di-update oleh Agen
        whereClause = {
          updatedByRoleAgen: {
            not: null,
          },
        };
        break;

      case "Admin":
        // Tidak ada filter, tampilkan semua
        whereClause = {};
        break;
    }

    // 4. Eksekusi query dengan filter yang sudah dibuat
    const transactions = await prisma.transaksi.findMany({
      where: whereClause, // Terapkan filter di sini
      include: {
        user: {
          select: {
            username: true,
            namaLengkap: true,
            noTlp: true,
            rt: true,
            rw: true,
          },
        },
        TransaksiProduk: {
          include: {
            produk: {
              select: {
                product_name: true,
                price: true,
                image: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return ResponseHandler.get(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return ResponseHandler.serverError();
  }
}

export async function POST(req: NextRequest) {
  const decoded = await verifyToken(req);
  if (decoded instanceof Response) {
    return decoded;
  }
  try {
    const body = await req.json();
    const { TransaksiProduk } = body || {};

    if (!decoded.id) {
      return ResponseHandler.InvalidData("ID pengguna tidak ditemukan.");
    }

    // Validate TransaksiProduk payload
    if (!Array.isArray(TransaksiProduk) || TransaksiProduk.length === 0) {
      return ResponseHandler.InvalidData("TransaksiProduk tidak valid.");
    }
    const sanitizedItems = [] as { produkId: string; quantity: number }[];
    for (const item of TransaksiProduk) {
      if (
        !item ||
        typeof item.produkId !== "string" ||
        item.produkId.trim() === "" ||
        typeof item.quantity !== "number" ||
        !Number.isInteger(item.quantity) ||
        item.quantity <= 0
      ) {
        return ResponseHandler.InvalidData("Item transaksi tidak valid.");
      }
      sanitizedItems.push({ produkId: item.produkId, quantity: item.quantity });
    }

    const newTransaksi = await prisma.transaksi.create({
      data: {
        statusUser: "Pending",
        userId: decoded.id,
        TransaksiProduk: {
          create: sanitizedItems,
        },
      },
      include: {
        TransaksiProduk: {
          include: {
            produk: true,
          },
        },
      },
    });

    return ResponseHandler.created(newTransaksi);
  } catch (error) {
    console.error(error);
    return ResponseHandler.serverError();
  }
}
