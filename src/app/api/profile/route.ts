import { ResponseHandler } from "@/lib/responseHandler";
import { verifyToken } from "../middleware/verifyToken";
import { prisma } from "@/constants/variables";

export async function GET(req: Request) {
  const decoded = await verifyToken(req);
  if (decoded instanceof Response) {
    return decoded;
  }
  if (typeof decoded !== "string" && decoded.id) {
    try {
      const id = decoded.id;

      const user = await prisma.user.findUnique({
        where: {
          id,
        },
        include: {
          transaksi: {
            include: {
              TransaksiProduk: {
                include: {
                  produk: true,
                },
              },
            },
          },
        },
      });

      if (!user) {
        return ResponseHandler.InvalidData("User not found");
      }

      const { password, ...userWithoutPassword } = user;

      return ResponseHandler.get(userWithoutPassword);
    } catch (error) {
      return ResponseHandler.serverError();
    }
  }
}
