import { NextRequest } from "next/server";
import { verifyToken } from "../../middleware/verifyToken";
import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { allowTransactionAccess } from "../../middleware/authorize";

export async function GET(req: NextRequest, { params }: any) {
  try {
    const decoded = await verifyToken(req);
    if (decoded instanceof Response) return decoded;

    const { id } = params;

    const transaksi = await prisma.transaksi.findUnique({
      where: { id },
      include: {
        TransaksiProduk: {
          include: {
            produk: { select: { product_name: true, price: true, image: true } },
          },
        },
        user: { select: { namaLengkap: true, username: true, rt: true, rw: true, noTlp: true, id: true } },
      },
    });
    if (!transaksi) return ResponseHandler.InvalidData("Transaksi not found");

    const guard = allowTransactionAccess(decoded as any, {
      ownerId: transaksi.user.id,
      ownerRt: transaksi.user.rt,
      updatedByRoleAgen: transaksi.updatedByRoleAgen ?? null,
    });
    if (guard) return guard;

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
    const { statusUser, statusAgen } = body || {};

    if (!decoded.id) {
      return ResponseHandler.InvalidData("ID pengguna tidak ditemukan.");
    }

    const existingTransaksi = await prisma.transaksi.findUnique({
      where: { id },
      include: { user: { select: { id: true, rt: true } } },
    });

    if (!existingTransaksi) {
      return ResponseHandler.InvalidData("Transaksi not found");
    }

    // RBAC/IDOR: verify user may update this transaction
    const guard = allowTransactionAccess(decoded as any, {
      ownerId: existingTransaksi.user.id,
      ownerRt: existingTransaksi.user.rt,
      updatedByRoleAgen: existingTransaksi.updatedByRoleAgen ?? null,
    });
    if (guard) return guard;

    const role = (decoded as any).role as
      | "Admin"
      | "Agen"
      | "Pengepul"
      | "Masyarakat";
    const allowedStatuses = new Set(["Pending", "Process", "Paid", "Failed"]);

    const dataToUpdate: any = {};

    // Field-level guards
    if (typeof statusUser === "string" && allowedStatuses.has(statusUser)) {
      if (role === "Admin" || role === "Agen" || role === "Masyarakat") {
        dataToUpdate.statusUser = statusUser;
        if (role === "Agen" || role === "Admin") {
          dataToUpdate.updatedByRoleAgen = role;
        }
      }
    }

    if (typeof statusAgen === "string" && allowedStatuses.has(statusAgen)) {
      if (role === "Admin" || role === "Pengepul") {
        dataToUpdate.statusAgen = statusAgen;
        dataToUpdate.updatedByRolePengepul = role;
      }
    }

    // Only Admin can modify items
    if (role === "Admin" && Array.isArray(body?.TransaksiProduk)) {
      const sanitizedItems: { produkId: string; quantity: number }[] = [];
      for (const item of body.TransaksiProduk) {
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

      dataToUpdate.TransaksiProduk = {
        deleteMany: {},
        create: sanitizedItems,
      };
    }

    if (Object.keys(dataToUpdate).length === 0) {
      return ResponseHandler.InvalidData("Tidak ada perubahan yang diizinkan");
    }

    const updateTransaksi = await prisma.transaksi.update({
      where: { id },
      data: dataToUpdate,
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
    const { id } = params;

    const transaction = await prisma.transaksi.findUnique({
      where: { id },
      include: { user: { select: { id: true, rt: true } } },
    });

    if (!transaction) {
      return ResponseHandler.InvalidData("Transaksi not found");
    }

    // RBAC/IDOR: verify delete permission (self/Admin/Agen-same-RT/Pengepul-when-eligible)
    const guard = allowTransactionAccess(decoded as any, {
      ownerId: transaction.user.id,
      ownerRt: transaction.user.rt,
      updatedByRoleAgen: transaction.updatedByRoleAgen ?? null,
    });
    if (guard) return guard;

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
