import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { verifyToken } from "../middleware/verifyToken";

export async function GET() {
  try {
    const products = await prisma.produk.findMany({
      include: {
        jenis: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return ResponseHandler.get(products);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}

export async function POST(req: Request) {
  const decoded = await verifyToken(req);
  if (decoded instanceof Response) {
    return decoded;
  }
  try {
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

    const newProduct = await prisma.produk.create({
      data: body,
    });

    return ResponseHandler.created(newProduct);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
