import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { verifyToken } from "../middleware/verifyToken";
import { NextRequest } from "next/server";
import { requireRole } from "../middleware/authorize";

export async function GET() {
  try {
    const galleries = await prisma.gallery.findMany();
    return ResponseHandler.get(galleries);
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
    // RBAC: admin only
    const roleGuard = requireRole(decoded as any, ["Admin"]);
    if (roleGuard) return roleGuard;

    const body = await req.json();
    const image = typeof body.image === "string" ? body.image : "";
    if (!image || !image.startsWith("/uploads/")) {
      return ResponseHandler.InvalidData("Invalid image path");
    }

    const newGallery = await prisma.gallery.create({ data: { image } });

    return ResponseHandler.created(newGallery);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
