import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { verifyToken } from "../middleware/verifyToken";

export async function GET() {
  try {
    const galleries = await prisma.gallery.findMany();
    return ResponseHandler.get(galleries);
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
    if (!body) {
      ResponseHandler.InvalidData();
    }

    const newGallery = await prisma.gallery.create({
      data: body,
    });

    return ResponseHandler.created(newGallery);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
