import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { verifyToken } from "../middleware/verifyToken";

export async function GET(req: Request) {
  const decoded = await verifyToken(req);
  if (decoded instanceof Response) {
    return decoded;
  }
  try {
    const role = await prisma.role.findMany();
    return ResponseHandler.get(role);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
