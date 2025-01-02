import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";

export async function GET(req: Request) {
  try {
    const users = await prisma.user.findMany({
      include: {
        role: true,
      },
    });
    const usersWithoutPassword = users.map(
      ({ password, ...userWithoutPassword }) => userWithoutPassword
    );

    return ResponseHandler.get(usersWithoutPassword);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
