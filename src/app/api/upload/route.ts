import { NextResponse } from "next/server";
import path from "path";
import { writeFile, mkdir } from "fs/promises";
import { ResponseHandler } from "@/lib/responseHandler";

export const POST = async (req: Request) => {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "No file received or incorrect file type." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name;
    const timestamp = Date.now();
    const uniqueName = `${timestamp}_${filename}`.replace(/\s+/g, "_");
    const uploadDir = "/var/www/uploads";
    const uploadPath = path.join(uploadDir, uniqueName);

    try {
      // Pastikan direktori tujuan ada, buat jika belum ada.
      await mkdir(uploadDir, { recursive: true });
    } catch (e: any) {
      // Abaikan error jika direktori sudah ada
      if (e.code !== "EEXIST") throw e;
    }

    // Simpan file ke path yang benar
    await writeFile(uploadPath, buffer);

    return ResponseHandler.created({ id: uniqueName });
  } catch (error) {
    console.error("Upload API Error:", error); // Tambahkan log untuk debugging
    return ResponseHandler.serverError();
  }
};
