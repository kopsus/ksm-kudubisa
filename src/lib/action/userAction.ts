"use server";

import pool from "@/lib/db";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";

export async function getUsers(role?: string) {
  try {
    // Siapkan query dasar
    let query = `
      SELECT id, namaLengkap, username, rt, rw, role, created_at, updated_at 
      FROM user 
    `;
    const queryParams: any[] = [];

    // Jika parameter role dikirim, tambahkan filter WHERE
    if (role) {
      query += ` WHERE role = ? `;
      queryParams.push(role);
    }

    // Tambahkan urutan
    query += ` ORDER BY created_at DESC `;

    // Eksekusi query dengan parameter (aman dari SQL Injection)
    const [rows] = await pool.query(query, queryParams);

    return { success: true, data: rows };
  } catch (error) {
    console.error("Error getUsers:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat mengambil data user",
    };
  }
}

export async function getUserById(id: string) {
  try {
    // 1. Ambil data User (tanpa password)
    const [userRows]: any = await pool.query(
      "SELECT id, namaLengkap, username, rt, rw, created_at, updated_at FROM user WHERE id = ?",
      [id],
    );

    if (userRows.length === 0) {
      return { success: false, message: "User tidak ditemukan" };
    }

    let user = userRows[0];

    // 2. Ambil data Transaksi milik User ini
    // Asumsi: kolom relasi bernama `userId`
    const [transaksiRows]: any = await pool.query(
      "SELECT * FROM transaksi WHERE userId = ?",
      [id],
    );

    // 3. Jika ada transaksi, kita ambil detail produknya (TransaksiProduk & produk)
    if (transaksiRows.length > 0) {
      // Ambil semua ID transaksi untuk query selanjutnya
      const transaksiIds = transaksiRows.map((t: any) => t.id);

      // Ambil TransaksiProduk di-JOIN langsung dengan tabel Produk
      // Asumsi: tabel bernama `TransaksiProduk` dan memiliki `transaksiId` & `produkId`
      const [detailRows]: any = await pool.query(
        `
        SELECT tp.*, p.product_name, p.price, p.image, p.jenis 
        FROM TransaksiProduk tp
        JOIN produk p ON tp.produkId = p.id
        WHERE tp.transaksiId IN (?)
      `,
        [transaksiIds],
      );

      // Gabungkan data detail ke masing-masing transaksi
      const transaksiLengkap = transaksiRows.map((trx: any) => {
        return {
          ...trx,
          TransaksiProduk: detailRows.filter(
            (detail: any) => detail.transaksiId === trx.id,
          ),
        };
      });

      user.transaksi = transaksiLengkap;
    } else {
      user.transaksi = [];
    }

    return { success: true, data: user };
  } catch (error) {
    console.error("Error getUserById:", error);
    return { success: false, message: "Terjadi kesalahan pada server" };
  }
}

export async function createUser(body: any) {
  try {
    if (/\s/.test(body.username)) {
      return {
        success: false,
        message: "Username tidak boleh mengandung spasi.",
      };
    }

    const [existing]: any = await pool.query(
      "SELECT id FROM user WHERE username = ?",
      [body.username],
    );
    if (existing.length > 0) {
      return { success: false, message: "Username sudah digunakan." };
    }

    if (!body.password || body.password.length < 8) {
      return {
        success: false,
        message: "Password minimal 8 karakter.",
      };
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const newId = randomUUID();

    // Perhatikan bahwa kita memisahkan password dari body sebelum digabung
    const { password, ...dataToInsert } = body;

    // Sesuaikan nilai default jika diperlukan (misal role)
    const finalData = {
      id: newId,
      ...dataToInsert,
      password: hashedPassword,
      role: dataToInsert.role || "Agen", // Gunakan 'role' bukan 'roleId'
    };

    const keys = Object.keys(finalData);
    const values = Object.values(finalData);
    const placeholders = keys.map(() => "?").join(", ");

    await pool.query(
      `INSERT INTO user (${keys.join(", ")}) VALUES (${placeholders})`,
      values,
    );

    // Refresh halaman agar data terbaru muncul di tabel
    revalidatePath("/agen");

    return { success: true, message: "Berhasil menambahkan user" };
  } catch (error) {
    console.error("Error createUser:", error);
    return { success: false, message: "Terjadi kesalahan saat menyimpan user" };
  }
}

export async function updateUser(id: string, body: any) {
  try {
    // 1. Validasi Username (Tidak boleh ada spasi)
    if (body.username && /\s/.test(body.username)) {
      return {
        success: false,
        message: "Username tidak boleh mengandung spasi.",
      };
    }

    // 2. Cek apakah user ada (ambil password lamanya juga untuk validasi)
    const [existing]: any = await pool.query(
      "SELECT id, password FROM user WHERE id = ?",
      [id],
    );
    if (existing.length === 0) {
      return { success: false, message: "User tidak ditemukan" };
    }

    const user = existing[0];
    let hashedPassword = user.password;

    // 3. Logika Update Password
    if (body.password && body.password !== user.password) {
      // Validasi password baru
      if (body.password.length < 8 || !/[a-zA-Z]/.test(body.password)) {
        return {
          success: false,
          message:
            "Password harus minimal 8 huruf dan mengandung minimal 1 karakter huruf.",
        };
      }
      // Hash password baru
      const salt = await bcrypt.genSalt();
      hashedPassword = await bcrypt.hash(body.password, salt);
    }

    // 4. Siapkan data untuk update (pisahkan password dari body jika ada)
    const { password, ...dataToUpdate } = body;
    const finalData = { ...dataToUpdate, password: hashedPassword };

    // Trik Query Update Dinamis
    const keys = Object.keys(finalData);
    if (keys.length === 0) {
      return { success: false, message: "Tidak ada data yang diupdate" };
    }

    const setClause = keys.map((k) => `${k} = ?`).join(", ");
    const values = Object.values(finalData);

    await pool.query(`UPDATE user SET ${setClause} WHERE id = ?`, [
      ...values,
      id,
    ]);

    // 5. Ambil data terbaru untuk dikembalikan (Sesuai 'select' di kode lamamu)
    const [updatedRows]: any = await pool.query(
      "SELECT namaLengkap, username, rt, rw FROM user WHERE id = ?",
      [id],
    );

    revalidatePath("/users"); // Sesuaikan dengan path halaman user-mu

    return {
      success: true,
      data: updatedRows[0],
      message: "Berhasil update data user",
    };
  } catch (error) {
    console.error("Error updateUser:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat mengupdate user",
    };
  }
}

export async function deleteUser(id: string) {
  try {
    // Cek keberadaan user
    const [existing]: any = await pool.query(
      "SELECT id FROM user WHERE id = ?",
      [id],
    );
    if (existing.length === 0) {
      return { success: false, message: "User tidak ditemukan" };
    }

    // Eksekusi hapus
    // CATATAN: Jika kamu tidak men-setting "ON DELETE CASCADE" di database MySQL-mu
    // pada tabel transaksi, ini akan error. Pastikan relasi di DB sudah CASCADE.
    await pool.query("DELETE FROM user WHERE id = ?", [id]);

    revalidatePath("/users");

    return { success: true, message: "User berhasil dihapus" };
  } catch (error) {
    console.error("Error deleteUser:", error);
    return {
      success: false,
      message:
        "Terjadi kesalahan saat menghapus user. Pastikan tidak ada data yang terikat.",
    };
  }
}
