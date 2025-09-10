import { NextRequest } from "next/server";
import { verifyToken } from "../../middleware/verifyToken";
import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";

export async function GET(req: NextRequest, { params }: any) {
  try {
    const { id } = await params;

    const transaksi = await prisma.transaksi.findUnique({
      where: { id },
      include: {
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
        user: {
          select: {
            namaLengkap: true,
            username: true,
            rt: true,
            rw: true,
            noTlp: true,
          },
        },
      },
    });

    if (!transaksi) {
      return ResponseHandler.InvalidData("Transaksi not found");
    }

    return ResponseHandler.get(transaksi);
  } catch (error) {
    console.error(error);
    return ResponseHandler.serverError();
  }
}

export async function PATCH(req: NextRequest, { params }: any) {
  const decoded = await verifyToken(req);
  if (decoded instanceof Response) {
    return decoded;
  }

  try {
    const id = params.id;
    const body = await req.json();
    const { statusUser, statusAgen, updatedByRoleAgen, updatedByRolePengepul } =
      body;

    if (!decoded.id) {
      return ResponseHandler.InvalidData("ID pengguna tidak ditemukan.");
    }

    const existingTransaksi = await prisma.transaksi.findUnique({
      where: { id },
    });

    if (!existingTransaksi) {
      return ResponseHandler.InvalidData("Transaksi not found");
    }

    const updateTransaksi = await prisma.transaksi.update({
      where: { id },
      data: {
        statusUser,
        statusAgen,
        updatedByRoleAgen,
        updatedByRolePengepul,
        TransaksiProduk: {
          deleteMany: {}, // Hapus semua transaksi produk lama
          create: body.TransaksiProduk?.map((item: any) => ({
            produkId: item.produkId, // ID produk
            quantity: item.quantity, // Jumlah produk
          })),
        },
      },
      select: {
        statusUser: true,
        statusAgen: true,
        updatedByRoleAgen: true,
        updatedByRolePengepul: true,
        TransaksiProduk: {
          include: {
            produk: true,
          },
        },
      },
    });

    return ResponseHandler.updated(updateTransaksi);
  } catch (error) {
    console.error(error);
    return ResponseHandler.serverError("Internal Server Error");
  }
}

export async function DELETE(req: NextRequest, { params }: any) {
  const decoded = await verifyToken(req);
  if (decoded instanceof Response) {
    return decoded;
  }

  try {
    const { id } = await params;

    const transaction = await prisma.transaksi.findUnique({
      where: {
        id,
      },
    });

    if (!transaction) {
      return ResponseHandler.InvalidData("Transaksi not found");
    }

    await prisma.transaksiProduk.deleteMany({
      where: {
        transaksiId: id,
      },
    });

    const deletedTransaction = await prisma.transaksi.delete({
      where: { id },
    });

    return ResponseHandler.deleted(deletedTransaction);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
