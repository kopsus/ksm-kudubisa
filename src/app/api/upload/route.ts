import { NextResponse } from "next/server";
import path from "path";
import { writeFile, mkdir } from "fs/promises";
import { ResponseHandler } from "@/lib/responseHandler";
import { verifyToken } from "../middleware/verifyToken";
import { requireRole } from "../middleware/authorize";
import { randomUUID } from "crypto";

export const POST = async (req: Request) => {
  try {
    const decoded = await verifyToken(req as any);
    if (decoded instanceof Response) return decoded;
    const guard = requireRole(decoded as any, ["Admin"]);
    if (guard) return guard;

    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return ResponseHandler.InvalidData("No file received or incorrect file type.");
    }

    // Enforce size limit (1 MB)
    const maxSize = 1 * 1024 * 1024;
    if (file.size > maxSize) return ResponseHandler.InvalidData("File too large (max 1MB)");

    const buffer = Buffer.from(await file.arrayBuffer());

    // Simple magic bytes validation for images (png,jpeg,gif,webp)
    const isPng = buffer.slice(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
    const isJpeg = buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
    const isGif = buffer.slice(0, 6).toString("ascii").startsWith("GIF8");
    const isWebp = buffer.slice(0, 4).toString("ascii") === "RIFF" && buffer.slice(8, 12).toString("ascii") === "WEBP";
    let ext = "";
    if (isPng) ext = "png";
    else if (isJpeg) ext = "jpg";
    else if (isGif) ext = "gif";
    else if (isWebp) ext = "webp";
    else return ResponseHandler.InvalidData("Unsupported file type");

    // Generate safe file name
    const uniqueName = `${Date.now()}-${randomUUID()}.${ext}`;

    // Save into public/uploads for serving
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    const uploadPath = path.join(uploadDir, uniqueName);

    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e: any) {
      if (e.code !== "EEXIST") throw e;
    }

    await writeFile(uploadPath, buffer);

    const url = `/uploads/${uniqueName}`;
    return ResponseHandler.created({ id: uniqueName, url });
  } catch (error) {
    console.error("Upload API Error:", error);
    return ResponseHandler.serverError();
  }
};
