import { ResponseHandler } from "@/lib/responseHandler";
import { jwtVerify, JWTPayload } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

interface DecodedToken extends JWTPayload {
  id?: string;
  role?: string;
}

export async function verifyToken(
  req: NextRequest
): Promise<DecodedToken | Response> {
  const authHeader = req.headers.get("Authorization");
  const tokenFromCookies = (await cookies()).get("accessToken")?.value;

  const token = authHeader?.split(" ")[1] || tokenFromCookies;

  if (!token) {
    return ResponseHandler.InvalidData(
      "Token tidak ditemukan, login diperlukan."
    );
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(token, secret);

    const decoded = payload as DecodedToken;
    if (!decoded.id) {
      return ResponseHandler.InvalidData("Token tidak valid.");
    }
    return decoded; // Sukses, kembalikan payload
  } catch (error) {
    // Tangani error dengan respons yang konsisten
    return ResponseHandler.InvalidData("Token tidak valid atau kedaluwarsa.");
  }
}
