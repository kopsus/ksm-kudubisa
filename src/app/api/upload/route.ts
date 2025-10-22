import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { ResponseHandler } from "@/lib/responseHandler";

export const POST = async (req: Request) => {
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
    const uploadDir = "/var/www/uploads";

    // Tetap simpan file dengan path lengkap
    await writeFile(path.join(process.cwd(), uploadDir, uniqueName), buffer);

    return ResponseHandler.created({ id: uniqueName });
  } catch (error) {
    return ResponseHandler.serverError();
  }
};
