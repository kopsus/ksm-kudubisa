import bcrypt from "bcrypt";
import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { NextRequest } from "next/server";
import { verifyToken } from "../../middleware/verifyToken";

export async function GET(req: NextRequest, { params }: any) {
  try {
    const decoded = await verifyToken(req);
    if (decoded instanceof Response) {
      return decoded;
    }

    const { id } = await params;

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        transaksi: {
          include: {
            TransaksiProduk: {
              include: {
                produk: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return ResponseHandler.InvalidData("User not found");
    }

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
    const { id } = await params;

    if (/\s/.test(body.username)) {
      return ResponseHandler.InvalidData(
        "Username tidak boleh mengandung spasi."
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return ResponseHandler.InvalidData("User not found");
    }

    let hashedPassword;
    if (body.password) {
      // Jika password baru, hash password tersebut
      if (body.password !== user.password) {
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

    const updateUser = await prisma.user.update({
      where: { id },
      data: {
        ...body,
        password: hashedPassword,
      },
      select: {
        namaLengkap: true,
        username: true,
        rt: true,
        rw: true,
      },
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
    const { id } = await params;

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
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
