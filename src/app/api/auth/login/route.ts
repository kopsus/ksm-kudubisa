import bcrypt from "bcrypt";
import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const user = await prisma.user.findFirst({
      where: {
        username,
      },
      include: {
        role: true,
      },
    });
    if (!user) return ResponseHandler.InvalidData("Username Tidak Ditemukan!");

    const passwordValidate = await bcrypt.compare(password, user.password);
    if (!passwordValidate)
      return ResponseHandler.InvalidData("Kata Sandi yang anda masukan salah!");

    const payload = {
      id: user.id,
      username: user.username,
      role: user.role.role,
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET!);

    (await cookies()).set("accessToken", token, {
      path: "/",
    });

    return ResponseHandler.get("Berhasil Login");
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
