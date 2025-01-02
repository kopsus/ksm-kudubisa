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

    const gallery = await prisma.gallery.findUnique({
      where: {
        id,
      },
    });

    if (!gallery) {
      return ResponseHandler.InvalidData("Gallery not found");
    }

    const updatedGallery = await prisma.gallery.update({
      where: { id },
      data: body,
    });

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
    const { id } = await params;

    const gallery = await prisma.gallery.findUnique({
      where: {
        id,
      },
    });

    if (!gallery) {
      return ResponseHandler.InvalidData("Gallery not found");
    }

    const filePath = path.join(
      process.cwd(),
      "public/assets",
      path.basename(gallery.image)
    );

    // Menghapus gambar dari folder assets
    await unlink(filePath).catch((err) => {
      // Log error jika gagal menghapus file, namun lanjutkan untuk menghapus gallery dari database
      console.error("Failed to delete image:", err);
    });

    const deletedGallery = await prisma.gallery.delete({
      where: { id },
    });

    return ResponseHandler.deleted(deletedGallery);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
