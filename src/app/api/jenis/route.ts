import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";

export async function GET() {
  try {
    const jenis = await prisma.jenisSampah.findMany();
    return ResponseHandler.get(jenis);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
