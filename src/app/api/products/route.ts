import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { verifyToken } from "../middleware/verifyToken";
import { NextRequest } from "next/server";
import { requireRole } from "../middleware/authorize";

export async function GET() {
  try {
    const products = await prisma.produk.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return ResponseHandler.get(products);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}

export async function POST(req: NextRequest) {
  const decoded = await verifyToken(req);
  if (decoded instanceof Response) {
    return decoded;
  }
  try {
    // RBAC: only Admin can create products
    const roleGuard = requireRole(decoded as any, ["Admin"]);
    if (roleGuard) return roleGuard;

    const body = await req.json();

    const { product_name } = body;

    const existingProduct = await prisma.produk.findUnique({
      where: {
        product_name,
      },
    });

    if (existingProduct) {
      return ResponseHandler.InvalidData(
        `Produk ${existingProduct.product_name} sudah tersedia`
      );
    }

    // Basic input validation/whitelist
    const name = typeof body.product_name === "string" ? body.product_name.trim() : "";
    const price = typeof body.price === "number" && body.price >= 0 ? body.price : null;
    const jenis = typeof body.jenis === "string" ? body.jenis : null;
    const image = typeof body.image === "string" ? body.image : "";

    if (!name || price === null || !jenis) {
      return ResponseHandler.InvalidData("Invalid product payload");
    }
    if (!image.startsWith("/uploads/")) {
      return ResponseHandler.InvalidData("Invalid image path");
    }

    const newProduct = await prisma.produk.create({
      data: { product_name: name, price, jenis, image },
    });

    return ResponseHandler.created(newProduct);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
