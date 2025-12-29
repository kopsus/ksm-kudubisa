import bcrypt from "bcrypt";
import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { NextRequest } from "next/server";
import { verifyToken } from "../../middleware/verifyToken";
import { requireOwnershipOrAdmin, requireRole } from "../../middleware/authorize";

export async function GET(req: NextRequest, { params }: any) {
  try {
    const decoded = await verifyToken(req);
    if (decoded instanceof Response) return decoded;

    const { id } = params;

    // Only self or admin can view user details
    const guard = requireOwnershipOrAdmin(decoded as any, id);
    if (guard) return guard;

    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        transaksi: {
          include: {
            TransaksiProduk: { include: { produk: true } },
          },
        },
      },
    });
    if (!user) return ResponseHandler.InvalidData("User not found");
    const { password, ...userWithoutPassword } = user;
    return ResponseHandler.get(userWithoutPassword);
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
    const body = await req.json();
    const { id } = params;

    // Only self or admin can update
    const guard = requireOwnershipOrAdmin(decoded as any, id);
    if (guard) return guard;

    // Basic field-level validation/whitelist
    if (typeof body.username === "string" && /\s/.test(body.username)) {
      return ResponseHandler.InvalidData("Username tidak boleh mengandung spasi.");
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return ResponseHandler.InvalidData("User not found");
    }

    let hashedPassword;
    if (body.password) {
      // Jika password baru, hash password tersebut
      if (body.password !== user.password) {
        // Validasi password
        if (
          !body.password ||
          body.password.length < 8 ||
          !/[a-zA-Z]/.test(body.password)
        ) {
          return ResponseHandler.InvalidData(
            "Password harus minimal 8 huruf dan mengandung minimal 1 karakter."
          );
        }

        const salt = await bcrypt.genSalt();
        hashedPassword = await bcrypt.hash(body.password, salt);
      } else {
        // Jika password sama, tidak perlu meng-hash ulang
        hashedPassword = user.password;
      }
    } else {
      // Jika tidak ada password yang baru, gunakan password lama
      hashedPassword = user.password;
    }

    // Prevent non-admin privilege escalation (role changes)
    const dataToUpdate: any = {
      namaLengkap: typeof body.namaLengkap === "string" ? body.namaLengkap.trim() : user.namaLengkap,
      noTlp: typeof body.noTlp === "string" ? body.noTlp.trim() : user.noTlp,
      rt: typeof body.rt === "string" || body.rt === null ? body.rt : user.rt,
      rw: typeof body.rw === "string" || body.rw === null ? body.rw : user.rw,
      username: typeof body.username === "string" ? body.username.trim() : user.username,
      password: hashedPassword,
    };

    // Admin can change role, others cannot
    if ((decoded as any).role === "Admin") {
      if (typeof body.role === "string") dataToUpdate.role = body.role;
    }

    const updateUser = await prisma.user.update({
      where: { id },
      data: dataToUpdate,
      select: { namaLengkap: true, username: true, rt: true, rw: true },
    });

    return ResponseHandler.updated(updateUser, "Berhasil update data user");
  } catch (error) {
    console.error(error);
    return ResponseHandler.serverError();
  }
}

export async function DELETE(req: NextRequest, { params }: any) {
  const decoded = await verifyToken(req);
  if (decoded instanceof Response) {
    return decoded;
  }
  try {
    const { id } = params;

    // Only admin can delete users
    const roleGuard = requireRole(decoded as any, ["Admin"]);
    if (roleGuard) return roleGuard;

    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        transaksi: true, // Memastikan kita mendapatkan transaksi yang terkait dengan user
      },
    });

    if (!user) {
      return ResponseHandler.InvalidData("User not found");
    }

    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return ResponseHandler.deleted(deletedUser);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
