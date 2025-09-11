import bcrypt from "bcrypt";
import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const user = await prisma.user.findFirst({
      where: { username },
    });

    if (!user) return ResponseHandler.InvalidData("Username tidak ditemukan!");

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return ResponseHandler.InvalidData("Password salah!");
    }

    const payload = {
      id: user.id,
      username: user.username,
      role: user.role,
      rt: user.rt,
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    // Set token ke cookie
    (
      await // Set token ke cookie
      cookies()
    ).set("accessToken", token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    // Tentukan redirect URL berdasarkan role
    let redirectUrl = "/";
    if (user.role !== "Masyarakat") {
      redirectUrl = "/dashboard";
    }

    return NextResponse.json(
      {
        status: 200,
        message: "Berhasil login!",
        redirect: redirectUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return ResponseHandler.serverError("Terjadi kesalahan server.");
  }
}
