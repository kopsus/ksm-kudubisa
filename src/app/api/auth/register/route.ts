import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let { username, password } = body;

    // ... (Semua validasi awal Anda tetap sama)
    if (/\s/.test(username)) {
      return ResponseHandler.InvalidData(
        "Username tidak boleh mengandung spasi."
      );
    }
    if (!password || password.length < 8 || !/[a-zA-Z]/.test(password)) {
      return ResponseHandler.InvalidData(
        "Password harus minimal 8 huruf dan mengandung minimal 1 karakter."
      );
    }
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });
    if (existingUser) {
      return ResponseHandler.InvalidData(
        `Username ${existingUser.username} sudah terdaftar`
      );
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        ...body,
        password: hashedPassword,
        rt: body.rt ?? null,
        rw: body.rw ?? null,
      },
      // 1. Modifikasi 'select' untuk menyertakan id dan role
      select: {
        id: true, // <-- Diperlukan untuk payload token
        username: true,
        role: true, // <-- Diperlukan untuk redirect
        namaLengkap: true,
        noTlp: true,
        rt: true,
        rw: true,
      },
    });

    // 2. Buat payload untuk token (sama seperti di fungsi login)
    const payload = {
      id: newUser.id,
      username: newUser.username,
      role: newUser.role,
      rt: newUser.rt,
    };

    // 3. Buat JWT
    const token = await jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    // 4. Set token ke dalam cookie
    (await cookies()).set("accessToken", token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    // 5. Tentukan URL redirect berdasarkan role
    let redirectUrl = "/";
    if (newUser.role !== "Masyarakat") {
      redirectUrl = "/dashboard";
    }

    // 6. Kembalikan response yang sama seperti login
    return NextResponse.json(
      {
        status: 200,
        message: "Registrasi berhasil! Anda akan dialihkan...",
        redirect: redirectUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
