// app/actions/authActions.ts
"use server";

import pool from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { randomUUID } from "crypto";

// 1. REGISTER USER (PUBLIK)
export async function registerUserAction(body: any) {
  try {
    const { username, password, namaLengkap, noTlp, rt, rw } = body;

    // 1. Validasi Input
    if (/\s/.test(username)) {
      return {
        success: false,
        message: "Username tidak boleh mengandung spasi.",
      };
    }
    if (!password || password.length < 8 || !/[a-zA-Z]/.test(password)) {
      return {
        success: false,
        message:
          "Password harus minimal 8 huruf dan mengandung minimal 1 karakter huruf.",
      };
    }

    // 2. Cek apakah username sudah ada
    const [existing]: any = await pool.query(
      "SELECT id, username FROM user WHERE username = ?",
      [username],
    );

    if (existing.length > 0) {
      return {
        success: false,
        message: `Username ${username} sudah terdaftar`,
      };
    }

    // 3. Hash Password & Siapkan ID
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newId = randomUUID();
    const role = "Masyarakat"; // Default role untuk registrasi publik

    // 4. Insert ke Database
    const insertQuery = `
      INSERT INTO user (id, username, password, role, namaLengkap, noTlp, rt, rw)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await pool.query(insertQuery, [
      newId,
      username,
      hashedPassword,
      role,
      namaLengkap,
      noTlp,
      rt ?? null,
      rw ?? null,
    ]);

    // 5. Buat payload JWT
    const payload = {
      id: newId,
      username: username,
      role: role,
      rt: rt ?? null,
    };

    // 6. Sign Token
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    // 7. Set Token ke Cookie
    const cookieStore = await cookies();
    cookieStore.set("accessToken", token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 hari
    });

    return {
      success: true,
      message: "Registrasi berhasil! Anda akan dialihkan...",
      redirect: "/", // Masyarakat langsung ke home
    };
  } catch (error) {
    console.error("Error registerUserAction:", error);
    return {
      success: false,
      message: "Terjadi kesalahan server saat registrasi.",
    };
  }
}

// 2. LOGIN USER
export async function loginUserAction(body: any) {
  try {
    const { username, password } = body;

    // 1. Cari user berdasarkan username
    const [rows]: any = await pool.query(
      "SELECT id, username, password, role, rt FROM user WHERE username = ?",
      [username],
    );

    if (rows.length === 0) {
      return { success: false, message: "Username tidak ditemukan!" };
    }

    const user = rows[0];

    // 2. Verifikasi Password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return { success: false, message: "Password salah!" };
    }

    // 3. Buat Payload JWT
    const payload = {
      id: user.id,
      username: user.username,
      role: user.role,
      rt: user.rt,
    };

    // 4. Sign Token
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    // 5. Set Token ke Cookie
    const cookieStore = await cookies();
    cookieStore.set("accessToken", token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 hari
    });

    // 6. Tentukan URL Redirect
    let redirectUrl = "/";
    if (user.role !== "Masyarakat") {
      redirectUrl = "/dashboard";
    }

    return {
      success: true,
      message: "Berhasil login!",
      redirect: redirectUrl,
    };
  } catch (error) {
    console.error("Error loginUserAction:", error);
    return { success: false, message: "Terjadi kesalahan server saat login." };
  }
}

// 3. LOGOUT USER
export async function logoutUserAction() {
  try {
    const cookieStore = await cookies();
    // Hapus cookie dengan men-delete namanya
    cookieStore.delete("accessToken");

    return {
      success: true,
      message: "Berhasil logout",
      redirect: "/auth/login",
    };
  } catch (error) {
    console.error("Error logoutUserAction:", error);
    return { success: false, message: "Gagal memproses logout." };
  }
}
