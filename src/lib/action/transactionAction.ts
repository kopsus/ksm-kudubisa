"use server";

import pool from "@/lib/db";
import { revalidatePath } from "next/cache";
import { randomUUID } from "crypto";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

async function getUserFromToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  if (!token) throw new Error("Unauthorized");

  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as any;
  } catch (error) {
    throw new Error("Invalid Token");
  }
}

// 1. GET ALL TRANSACTIONS (Dengan Filter Role)
export async function getTransactions() {
  try {
    const userProfile = await getUserFromToken();
    const { id: userId, role, rt: userRt } = userProfile;

    // 1. Siapkan Query Dasar & Join Tabel User
    let query = `
      SELECT t.*, 
             u.username, u.namaLengkap, u.noTlp, u.rt AS userRt, u.rw AS userRw
      FROM transaksi t
      JOIN user u ON t.userId = u.id
    `;
    let queryParams: any[] = [];

    // 2. Filter berdasarkan Role
    if (role === "Masyarakat") {
      query += ` WHERE t.userId = ?`;
      queryParams.push(userId);
    } else if (role === "Agen") {
      if (!userRt)
        return { success: false, message: "Agen tidak memiliki data RT." };
      query += ` WHERE u.rt = ?`;
      queryParams.push(userRt);
    } else if (role === "Pengepul") {
      query += ` WHERE t.updatedByRoleAgen IS NOT NULL`;
    }
    // Jika Admin, biarkan query tanpa WHERE (ambil semua)

    query += ` ORDER BY t.created_at DESC`;

    // 3. Eksekusi Query Transaksi Utama
    const [transaksiRows]: any = await pool.query(query, queryParams);

    if (transaksiRows.length === 0) {
      return { success: true, data: [] };
    }

    // 4. Ambil Detail Produk untuk Semua Transaksi (Mencegah N+1 Query Problem)
    const transaksiIds = transaksiRows.map((t: any) => t.id);

    // Trik MySQL: Gunakan IN (?) untuk mencari banyak ID sekaligus
    const [detailRows]: any = await pool.query(
      `
      SELECT tp.*, p.product_name, p.price, p.image
      FROM TransaksiProduk tp
      JOIN produk p ON tp.produkId = p.id
      WHERE tp.transaksiId IN (?)
    `,
      [transaksiIds],
    );

    // 5. Gabungkan Data (Mirip seperti 'include' di Prisma)
    const resultData = transaksiRows.map((trx: any) => {
      // Ekstrak data user ke dalam object terpisah
      const { username, namaLengkap, noTlp, userRt, userRw, ...transaksiData } =
        trx;

      return {
        ...transaksiData,
        user: { username, namaLengkap, noTlp, rt: userRt, rw: userRw },
        TransaksiProduk: detailRows.filter(
          (detail: any) => detail.transaksiId === trx.id,
        ),
      };
    });

    return { success: true, data: resultData };
  } catch (error: any) {
    console.error("Error getTransactions:", error);
    if (error.message === "Unauthorized" || error.message === "Invalid Token") {
      return {
        success: false,
        message: "Sesi tidak valid, silakan login ulang.",
      };
    }
    return {
      success: false,
      message: "Terjadi kesalahan server saat mengambil transaksi.",
    };
  }
}

// 2. CREATE TRANSACTION (POST)
export async function createTransaction(body: any) {
  try {
    const userProfile = await getUserFromToken();
    const { TransaksiProduk } = body;

    if (!userProfile.id || !TransaksiProduk || TransaksiProduk.length === 0) {
      return { success: false, message: "Data tidak lengkap" };
    }

    const transaksiId = randomUUID();
    const now = new Date();

    // 1. Simpan Transaksi Induk
    await pool.query(
      `INSERT INTO transaksi (id, userId, statusUser, created_at, updated_at) VALUES (?, ?, ?, ?, ?)`,
      [transaksiId, userProfile.id, "Pending", now, now],
    );

    // 2. Simpan Detail Produk (Loop)
    // Sebaiknya menggunakan iterasi for...of untuk mengeksekusi query secara berurutan atau Promise.all
    const detailQueries = TransaksiProduk.map((item: any) => {
      const detailId = randomUUID();
      return pool.query(
        `INSERT INTO TransaksiProduk (id, transaksiId, produkId, quantity) VALUES (?, ?, ?, ?)`,
        [detailId, transaksiId, item.produkId, item.quantity],
      );
    });

    await Promise.all(detailQueries);

    revalidatePath("/transactions"); // Sesuaikan route-mu
    revalidatePath("/dashboard");

    return { success: true, message: "Transaksi berhasil dibuat!" };
  } catch (error) {
    console.error("Error createTransaction:", error);
    return { success: false, message: "Gagal membuat transaksi." };
  }
}

// 3. GET TRANSACTION BY ID
export async function getTransactionById(id: string) {
  try {
    // 1. Ambil transaksi & User
    const [tRows]: any = await pool.query(
      `
      SELECT t.*, u.username, u.namaLengkap, u.noTlp, u.rt AS userRt, u.rw AS userRw
      FROM transaksi t
      JOIN user u ON t.userId = u.id
      WHERE t.id = ?
    `,
      [id],
    );

    if (tRows.length === 0) {
      return { success: false, message: "Transaksi tidak ditemukan" };
    }

    const trx = tRows[0];
    const { username, namaLengkap, noTlp, userRt, userRw, ...transaksiData } =
      trx;

    // 2. Ambil detail produknya
    const [detailRows]: any = await pool.query(
      `
      SELECT tp.*, p.product_name, p.price, p.image
      FROM TransaksiProduk tp
      JOIN produk p ON tp.produkId = p.id
      WHERE tp.transaksiId = ?
    `,
      [id],
    );

    const resultData = {
      ...transaksiData,
      user: { username, namaLengkap, noTlp, rt: userRt, rw: userRw },
      TransaksiProduk: detailRows,
    };

    return { success: true, data: resultData };
  } catch (error) {
    console.error("Error getTransactionById:", error);
    return { success: false, message: "Terjadi kesalahan server." };
  }
}

// 4. UPDATE TRANSACTION (PATCH)
export async function updateTransaction(id: string, body: any) {
  try {
    const { TransaksiProduk, ...updateData } = body;

    // 1. Update data Transaksi Induk
    const keys = Object.keys(updateData);
    if (keys.length > 0) {
      const setClause = keys.map((k) => `${k} = ?`).join(", ");
      const values = Object.values(updateData);
      await pool.query(`UPDATE transaksi SET ${setClause} WHERE id = ?`, [
        ...values,
        id,
      ]);
    }

    // 2. Jika ada data TransaksiProduk baru, Hapus yang lama, Masukkan yang baru
    if (TransaksiProduk && TransaksiProduk.length > 0) {
      await pool.query(`DELETE FROM TransaksiProduk WHERE transaksiId = ?`, [
        id,
      ]);

      const detailQueries = TransaksiProduk.map((item: any) => {
        const detailId = randomUUID();
        return pool.query(
          `INSERT INTO TransaksiProduk (id, transaksiId, produkId, quantity) VALUES (?, ?, ?, ?)`,
          [detailId, id, item.produkId, item.quantity],
        );
      });
      await Promise.all(detailQueries);
    }

    revalidatePath("/transactions");
    revalidatePath("/dashboard");

    return { success: true, message: "Transaksi berhasil diupdate" };
  } catch (error) {
    console.error("Error updateTransaction:", error);
    return { success: false, message: "Gagal mengupdate transaksi." };
  }
}

// 5. DELETE TRANSACTION
export async function deleteTransaction(id: string) {
  try {
    await getUserFromToken();

    await pool.query("DELETE FROM TransaksiProduk WHERE transaksiId = ?", [id]);

    await pool.query("DELETE FROM transaksi WHERE id = ?", [id]);

    revalidatePath("/transactions");
    revalidatePath("/dashboard");

    return { success: true, message: "Transaksi berhasil dihapus" };
  } catch (error) {
    console.error("Error deleteTransaction:", error);
    return { success: false, message: "Gagal menghapus transaksi." };
  }
}
