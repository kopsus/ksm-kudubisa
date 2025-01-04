import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { NextRequest } from "next/server";
import { verifyToken } from "../../middleware/verifyToken";
import path from "path";
import { unlink } from "fs/promises";

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

    const updatedroduk = await prisma.produk.update({
      where: { id },
      data: body,
    });

    return ResponseHandler.updated(updatedroduk);
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
      "public/assets",
      path.basename(product.image)
    );

    // Menghapus gambar dari folder assets
    await unlink(filePath).catch((err) => {
      // Log error jika gagal menghapus file, namun lanjutkan untuk menghapus gallery dari database
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
