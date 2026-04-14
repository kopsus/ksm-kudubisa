"use server";

import pool from "@/lib/db";
import { unlink } from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { randomUUID } from "crypto";
import fs from "fs";

// 1. GET ALL PRODUCTS
export async function getProducts() {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM produk ORDER BY created_at DESC",
    );

    return { success: true, data: rows };
  } catch (error) {
    console.error("Error getProducts:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat mengambil data produk",
    };
  }
}

// 2. GET PRODUCT BY ID
export async function getProductById(id: string) {
  try {
    const [rows]: any = await pool.query("SELECT * FROM produk WHERE id = ?", [
      id,
    ]);

    if (rows.length === 0) {
      return { success: false, message: "Produk tidak ditemukan" };
    }

    return { success: true, data: rows[0] };
  } catch (error) {
    console.error("Error getProductById:", error);
    return { success: false, message: "Terjadi kesalahan pada server" };
  }
}

// 3. CREATE PRODUCT
export async function createProduct(data: any) {
  try {
    if (!data || !data.product_name) {
      return { success: false, message: "Nama produk wajib diisi" };
    }

    // 1. Cek apakah produk dengan nama yang sama sudah ada
    const [existing]: any = await pool.query(
      "SELECT id, product_name FROM produk WHERE product_name = ?",
      [data.product_name],
    );

    if (existing.length > 0) {
      return {
        success: false,
        message: `Produk ${data.product_name} sudah tersedia`,
      };
    }

    // 2. Siapkan data untuk di-insert
    const newId = randomUUID();
    const insertData = { id: newId, ...data };

    // Trik membuat query dinamis seperti Prisma
    const keys = Object.keys(insertData);
    const values = Object.values(insertData);
    const placeholders = keys.map(() => "?").join(", ");

    const query = `INSERT INTO produk (${keys.join(", ")}) VALUES (${placeholders})`;

    // 3. Eksekusi query
    await pool.query(query, values);

    revalidatePath("/products"); // Sesuaikan dengan route halaman produkmu

    return {
      success: true,
      data: insertData,
      message: "Produk berhasil ditambahkan",
    };
  } catch (error: any) {
    console.error("Error createProduct:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat menyimpan produk",
    };
  }
}

// 4. UPDATE PRODUCT
export async function updateProduct(id: string, data: any) {
  try {
    // 1. Ambil data produk lama
    const [existing]: any = await pool.query(
      "SELECT * FROM produk WHERE id = ?",
      [id],
    );

    if (existing.length === 0) {
      return { success: false, message: "Produk tidak ditemukan" };
    }

    const oldProduct = existing[0];

    // 2. Trik membuat query UPDATE dinamis
    const keys = Object.keys(data);
    if (keys.length === 0) {
      return { success: false, message: "Tidak ada data yang diupdate" };
    }

    const setClause = keys.map((k) => `${k} = ?`).join(", ");
    const values = Object.values(data);

    const query = `UPDATE produk SET ${setClause} WHERE id = ?`;

    // 3. Eksekusi Update
    await pool.query(query, [...values, id]);

    // 4. Hapus gambar lama HANYA JIKA ada gambar baru dan namanya berbeda
    if (data.image && oldProduct.image && data.image !== oldProduct.image) {
      const oldImagePath = path.join(process.cwd(), "public", oldProduct.image);
      if (fs.existsSync(oldImagePath)) {
        await unlink(oldImagePath).catch((err) =>
          console.error("Gagal hapus gambar lama:", err),
        );
      }
    }

    revalidatePath("/products");
    revalidatePath(`/products/${id}`);

    return {
      success: true,
      data: { ...oldProduct, ...data },
      message: "Produk berhasil diupdate",
    };
  } catch (error: any) {
    console.error("Error updateProduct:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat mengupdate produk",
    };
  }
}

// 5. DELETE PRODUCT
export async function deleteProduct(id: string) {
  try {
    // 1. Cek produk dan ambil path gambarnya
    const [existing]: any = await pool.query(
      "SELECT image FROM produk WHERE id = ?",
      [id],
    );

    if (existing.length === 0) {
      return { success: false, message: "Produk tidak ditemukan" };
    }

    const productImage = existing[0].image;

    // 2. Hapus data dari database
    await pool.query("DELETE FROM produk WHERE id = ?", [id]);

    // 3. Hapus file gambar jika ada
    if (productImage) {
      // Menggunakan path.basename agar aman jika di DB tersimpan '/uploads/nama.jpg'
      const fileName = path.basename(productImage);
      const filePath = path.join(process.cwd(), "public/uploads", fileName);

      if (fs.existsSync(filePath)) {
        await unlink(filePath).catch((err) =>
          console.error("Gagal hapus gambar produk:", err),
        );
      }
    }

    revalidatePath("/products");

    return { success: true, message: "Produk berhasil dihapus" };
  } catch (error: any) {
    console.error("Error deleteProduct:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat menghapus produk",
    };
  }
}
