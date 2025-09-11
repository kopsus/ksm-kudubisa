import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { NextRequest } from "next/server";
import { verifyToken } from "../../middleware/verifyToken";
import path from "path";
import { unlink } from "fs/promises";
import fs from "fs";

export async function GET(req: NextRequest, { params }: any) {
  try {
    const { id } = await params;

    const product = await prisma.produk.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      return ResponseHandler.InvalidData("product not found");
    }

    return ResponseHandler.get(product);
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
    const { id } = await params;

    const product = await prisma.produk.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      return ResponseHandler.InvalidData("Produk not found");
    }

    // Cek apakah ada gambar lama yang perlu dihapus
    if (product.image) {
      const oldImagePath = path.join(process.cwd(), "public", product.image); // Ganti sesuai dengan path file yang Anda gunakan di server

      // Hapus file gambar lama jika ada
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath); // Hapus file
      }
    }

    // Update data produk dengan gambar baru (jika ada)
    const updatedProduct = await prisma.produk.update({
      where: { id },
      data: {
        ...body, // update semua data yang ada pada body
        image: body.image ?? product.image, // pastikan gambar baru diterapkan jika ada
      },
    });

    return ResponseHandler.updated(updatedProduct);
  } catch (error) {
    console.error(error);
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

    const product = await prisma.produk.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      return ResponseHandler.InvalidData("Produk not found");
    }

    const filePath = path.join(
      process.cwd(),
      "public/uploads",
      path.basename(product.image)
    );

    // Menghapus gambar dari folder uploads
    await unlink(filePath).catch((err) => {
      console.error("Failed to delete image:", err);
    });

    const deletedProduct = await prisma.produk.delete({
      where: { id },
    });

    return ResponseHandler.deleted(deletedProduct);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
