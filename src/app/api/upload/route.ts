import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { ResponseHandler } from "@/lib/responseHandler";
import { verifyToken } from "../middleware/verifyToken";

const getBaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    // Jika di production, gunakan domain dari environment variable
    return `https://${process.env.VERCEL_URL}`;
  }
  // Jika di development, gunakan localhost
  return "http://localhost:3000";
};

export const POST = async (req: Request) => {
  const decoded = await verifyToken(req);
  if (decoded instanceof Response) {
    return decoded;
  }
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "No file received or incorrect file type." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name;
    const timestamp = Date.now();
    const uniqueName = `${timestamp}_${filename}`.replace(/\s+/g, "_");
    const fileUrl = `${getBaseUrl()}/assets/${uniqueName}`;

    await writeFile(
      path.join(process.cwd(), "public/assets", uniqueName),
      buffer
    );

    return ResponseHandler.created(fileUrl);
  } catch (error) {
    return ResponseHandler.serverError();
  }
};
