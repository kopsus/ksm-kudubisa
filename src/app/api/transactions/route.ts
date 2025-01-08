import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { verifyToken } from "../middleware/verifyToken";

export async function GET() {
  try {
    const transactions = await prisma.transaksi.findMany({
      include: {
        user: {
          select: {
            username: true,
            namaLengkap: true,
            noTlp: true,
            rt: true,
            rw: true,
          },
        },
        TransaksiProduk: {
          include: {
            produk: {
              select: {
                product_name: true,
                price: true,
                image: true,
              },
            },
          },
        },
        updatedByAgen: true,
        updatedByPengepul: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return ResponseHandler.get(transactions);
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
    const { TransaksiProduk } = body;

    if (!decoded.id) {
      return ResponseHandler.InvalidData("ID pengguna tidak ditemukan.");
    }

    const newTransaksi = await prisma.transaksi.create({
      data: {
        statusUser: "Pending",
        userId: decoded.id,
        TransaksiProduk: {
          create: TransaksiProduk.map((item: any) => ({
            produkId: item.produkId,
            quantity: item.quantity,
          })),
        },
      },
      include: {
        TransaksiProduk: {
          include: {
            produk: true,
          },
        },
      },
    });

    return ResponseHandler.created(newTransaksi);
  } catch (error) {
    console.error(error);
    return ResponseHandler.serverError();
  }
}
