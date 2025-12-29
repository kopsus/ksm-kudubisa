import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { verifyToken } from "../middleware/verifyToken";
import { requireRole } from "../middleware/authorize";

export async function GET(req: Request) {
  try {
    // RBAC: only Admin can list users
    const decoded = await verifyToken(req as any);
    if (decoded instanceof Response) return decoded;
    const forbidden = requireRole(decoded as any, ["Admin"]);
    if (forbidden) return forbidden;

    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });
    const usersWithoutPassword = users.map(({ password, ...user }) => user);
    return ResponseHandler.get(usersWithoutPassword);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
