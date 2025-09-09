import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { NextRequest } from "next/server";
import { verifyToken } from "../../middleware/verifyToken";
import { unlink } from "fs/promises";
import path from "path";

export async function GET(req: NextRequest, { params }: any) {
  try {
    const { id } = await params;

    const gallery = await prisma.gallery.findUnique({
      where: {
        id,
      },
    });

    if (!gallery) {
      return ResponseHandler.InvalidData("gallery not found");
    }

    return ResponseHandler.get(gallery);
  } catch (error) {
    console.error(error);
    return ResponseHandler.serverError();
  }
}

export async function PATCH(req: NextRequest, { params }: any) {
  const decoded = await verifyToken(req);
  if (decoded instanceof Response) {
    return decoded;
  }
  try {
    const body = await req.json();
    const { id } = params;

    // 1. Cari data gallery yang ada untuk mendapatkan path gambar lama
    const existingGallery = await prisma.gallery.findUnique({
      where: {
        id,
      },
    });

    if (!existingGallery) {
      return ResponseHandler.InvalidData("Gallery not found");
    }

    // Simpan path gambar lama sebelum diupdate
    const oldImagePath = existingGallery.image;

    // 2. Update data gallery di database dengan data baru
    const updatedGallery = await prisma.gallery.update({
      where: { id },
      data: body,
    });

    // 3. Cek jika ada path gambar baru di body DAN path itu berbeda dari yang lama
    if (body.image && body.image !== oldImagePath) {
      try {
        // Buat path lengkap ke file lama
        const oldFilePath = path.join(process.cwd(), "public", oldImagePath);
        // Hapus file lama
        await unlink(oldFilePath);
        console.log("Successfully deleted old image file:", oldImagePath);
      } catch (err) {
        console.error("Failed to delete old image file:", err);
      }
    }

    return ResponseHandler.updated(updatedGallery);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}

export async function DELETE(req: NextRequest, { params }: any) {
  const decoded = await verifyToken(req);
  if (decoded instanceof Response) {
    return decoded;
  }

  try {
    const { id } = params;

    const gallery = await prisma.gallery.findUnique({
      where: {
        id,
      },
    });

    if (!gallery) {
      return ResponseHandler.InvalidData("Gallery not found");
    }

    // Path ke file yang akan dihapus (gallery.image harusnya seperti '/uploads/namafile.jpg')
    const filePath = path.join(process.cwd(), "public", gallery.image);

    // Hapus gambar dari folder uploads
    try {
      await unlink(filePath);
      console.log("Successfully deleted image file:", filePath);
    } catch (err) {
      // Log error jika file tidak ada, tapi tetap lanjutkan proses
      console.error("Failed to delete image file (may not exist):", err);
    }

    // Hapus data dari database
    const deletedGallery = await prisma.gallery.delete({
      where: { id },
    });

    return ResponseHandler.deleted(deletedGallery);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
