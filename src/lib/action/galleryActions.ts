"use server";

import pool from "@/lib/db";
import { unlink } from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { randomUUID } from "crypto";

// 1. GET ALL GALLERIES
export async function getGalleries() {
  try {
    const [rows] = await pool.query("SELECT * FROM gallery ORDER BY id DESC");

    return { success: true, data: rows };
  } catch (error) {
    console.error("Error getGalleries:", error);
    return { success: false, message: "Terjadi kesalahan pada server" };
  }
}

// 2. GET GALLERY BY ID
export async function getGalleryById(id: string) {
  try {
    const [rows]: any = await pool.query("SELECT * FROM gallery WHERE id = ?", [
      id,
    ]);

    if (rows.length === 0) {
      return { success: false, message: "Gallery tidak ditemukan" };
    }

    return { success: true, data: rows[0] };
  } catch (error) {
    console.error("Error getGalleryById:", error);
    return { success: false, message: "Terjadi kesalahan pada server" };
  }
}

// 3. CREATE GALLERY
export async function createGallery(data: any) {
  try {
    if (!data || !data.image) {
      return { success: false, message: "Data tidak valid" };
    }

    const newId = randomUUID();

    await pool.query("INSERT INTO gallery (id, image) VALUES (?, ?)", [
      newId,
      data.image,
    ]);

    revalidatePath("/gallery");

    return {
      success: true,
      data: { id: newId, image: data.image },
      message: "Gallery berhasil ditambahkan",
    };
  } catch (error: any) {
    console.error("Error createGallery:", error);
    return { success: false, message: "Terjadi kesalahan pada server" };
  }
}

// 4. UPDATE GALLERY
export async function updateGallery(id: string, data: any) {
  try {
    // 1. Cari data lama untuk mendapat path gambar
    const [existing]: any = await pool.query(
      "SELECT image FROM gallery WHERE id = ?",
      [id],
    );

    if (existing.length === 0) {
      return { success: false, message: "Gallery tidak ditemukan" };
    }

    const oldImagePath = existing[0].image;

    // 2. Update database
    await pool.query("UPDATE gallery SET image = ? WHERE id = ?", [
      data.image,
      id,
    ]);

    // 3. Hapus gambar lama jika ada gambar baru dan berbeda
    if (data.image && data.image !== oldImagePath) {
      try {
        const oldFilePath = path.join(process.cwd(), "public", oldImagePath);
        await unlink(oldFilePath);
        console.log("Successfully deleted old image file:", oldImagePath);
      } catch (err) {
        console.error("Failed to delete old image file:", err);
      }
    }

    revalidatePath("/gallery");
    revalidatePath(`/gallery/${id}`);

    return {
      success: true,
      data: { id, image: data.image },
      message: "Gallery berhasil diupdate",
    };
  } catch (error: any) {
    console.error("Error updateGallery:", error);
    return { success: false, message: "Terjadi kesalahan pada server" };
  }
}

// 5. DELETE GALLERY
export async function deleteGallery(id: string) {
  try {
    // 1. Cari data untuk mendapatkan path gambar
    const [existing]: any = await pool.query(
      "SELECT image FROM gallery WHERE id = ?",
      [id],
    );

    if (existing.length === 0) {
      return { success: false, message: "Gallery tidak ditemukan" };
    }

    const galleryImage = existing[0].image;

    // 2. Hapus data dari database
    await pool.query("DELETE FROM gallery WHERE id = ?", [id]);

    // 3. Hapus gambar dari folder uploads
    if (galleryImage) {
      const filePath = path.join(process.cwd(), "public", galleryImage);
      try {
        await unlink(filePath);
        console.log("Successfully deleted image file:", filePath);
      } catch (err) {
        console.error("Failed to delete image file (may not exist):", err);
      }
    }

    revalidatePath("/gallery");

    return { success: true, message: "Gallery berhasil dihapus" };
  } catch (error: any) {
    console.error("Error deleteGallery:", error);
    return { success: false, message: "Terjadi kesalahan pada server" };
  }
}
