"use server";

import path from "path";
import { writeFile, mkdir } from "fs/promises";

export async function uploadFileAction(formData: FormData) {
  try {
    // 1. Ambil file dari FormData
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return {
        success: false,
        message: "Tidak ada file yang diterima atau tipe file tidak sesuai.",
      };
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return {
        success: false,
        message: "Hanya file gambar (JPG, PNG, WEBP) yang diperbolehkan!",
      };
    }

    // 2. Ubah file menjadi buffer agar bisa disimpan oleh Node.js
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name;
    const timestamp = Date.now();

    // Hilangkan spasi pada nama file untuk menghindari error URL
    const uniqueName = `${timestamp}_${filename}`.replace(/\s+/g, "_");

    // 3. Tentukan direktori penyimpanan
    // Berikan fallback default jika .env belum tersetting
    const uploadDir =
      process.env.UPLOAD_PATH || path.join(process.cwd(), "public/uploads");
    const uploadPath = path.join(uploadDir, uniqueName);

    // 4. Pastikan folder tujuan tersedia
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e: any) {
      if (e.code !== "EEXIST") throw e;
    }

    // 5. Tulis/simpan file ke server
    await writeFile(uploadPath, buffer);

    // 6. Kembalikan respons berhasil
    return {
      success: true,
      data: {
        id: uniqueName,
        // Jika kamu butuh path lengkap untuk disimpan ke database:
        // url: `/uploads/${uniqueName}` (asumsi folder UPLOAD_PATH ada di dalam folder 'public')
      },
      message: "File berhasil diunggah",
    };
  } catch (error) {
    console.error("Upload API Error:", error);
    return {
      success: false,
      message: "Terjadi kesalahan pada server saat mengunggah file.",
    };
  }
}
