import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { NextRequest } from "next/server";
import { verifyToken } from "../../middleware/verifyToken";
import { requireRole } from "../../middleware/authorize";
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
    const roleGuard = requireRole(decoded as any, ["Admin"]);
    if (roleGuard) return roleGuard;

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

    // Basic input validation/whitelist
    const name = typeof body.product_name === "string" ? body.product_name.trim() : product.product_name;
    const price = typeof body.price === "number" && body.price >= 0 ? body.price : product.price;
    const jenis = typeof body.jenis === "string" ? body.jenis : product.jenis;
    const newImage = typeof body.image === "string" ? body.image : product.image;
    if (newImage && !newImage.startsWith("/uploads/")) {
      return ResponseHandler.InvalidData("Invalid image path");
    }

    // Update data produk dengan gambar baru (jika ada)
    const updatedProduct = await prisma.produk.update({
      where: { id },
      data: {
        product_name: name,
        price,
        jenis,
        image: newImage ?? product.image, // pastikan gambar baru diterapkan jika ada
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
    const roleGuard = requireRole(decoded as any, ["Admin"]);
    if (roleGuard) return roleGuard;

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
