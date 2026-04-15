"use server";

import pool from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { randomUUID } from "crypto";

export async function registerUser(body: any) {
  try {
    let { username, password, role, namaLengkap, noTlp, rt, rw } = body;

    // 1. Validasi Username (Tidak boleh ada spasi)
    if (/\s/.test(username)) {
      return {
        success: false,
        message: "Username tidak boleh mengandung spasi.",
      };
    }

    // 2. Validasi Password
    if (!password || password.length < 8 || !/[a-zA-Z]/.test(password)) {
      return {
        success: false,
        message:
          "Password harus minimal 8 huruf dan mengandung minimal 1 karakter huruf.",
      };
    }

    // 3. Cek ketersediaan Username di Database
    const [existing]: any = await pool.query(
      "SELECT id FROM user WHERE username = ?",
      [username],
    );

    if (existing.length > 0) {
      return {
        success: false,
        message: `Username ${username} sudah terdaftar`,
      };
    }

    // 4. Hash Password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // 5. Siapkan data untuk di-insert
    const newId = randomUUID();

    // Asumsi database menangani created_at dan updated_at secara otomatis
    const insertQuery = `
      INSERT INTO user (id, username, password, role, namaLengkap, noTlp, rt, rw)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      newId,
      username,
      hashedPassword,
      role || "Masyarakat", // Default role jika tidak dikirim
      namaLengkap,
      noTlp,
      rt ?? null,
      rw ?? null,
    ];

    // Eksekusi Insert
    await pool.query(insertQuery, values);

    // 6. Buat payload untuk JWT Token
    const payload = {
      id: newId,
      username: username,
      role: role || "Masyarakat",
      rt: rt ?? null,
    };

    // 7. Buat JWT
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET belum disetting di .env");
    }

    const token = jwt.sign(payload, secret, {
      expiresIn: "1d",
    });

    // 8. Set token ke dalam cookie (Menggunakan Next.js cookies API)
    const cookieStore = await cookies();
    cookieStore.set("accessToken", token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 hari dalam detik
    });

    // 9. Tentukan URL redirect berdasarkan role
    let redirectUrl = "/";
    if (payload.role !== "Masyarakat") {
      redirectUrl = "/dashboard";
    }

    // 10. Kembalikan response sukses
    return {
      success: true,
      message: "Registrasi berhasil! Anda akan dialihkan...",
      redirect: redirectUrl,
    };
  } catch (error) {
    console.error("Error registerUser:", error);
    return {
      success: false,
      message: "Terjadi kesalahan pada server saat registrasi",
    };
  }
}
