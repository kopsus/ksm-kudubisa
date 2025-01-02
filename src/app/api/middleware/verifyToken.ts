import { ResponseHandler } from "@/lib/responseHandler";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";

interface DecodedToken extends JwtPayload {
  id?: string; // or number, depending on how your ID is structured
  role?: string;
}

export async function verifyToken(req: Request) {
  const authHeader = req.headers.get("Authorization");
  const tokenFromCookies = (await cookies()).get("accessToken")?.value;

  const token = authHeader?.split(" ")[1] || tokenFromCookies;

  if (!token) {
    return ResponseHandler.InvalidData(
      "Token tidak ditemukan, login diperlukan."
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
    if (!decoded.id) {
      return ResponseHandler.InvalidData("Token tidak valid.");
    }
    return decoded;
  } catch (error) {
    return { status: 401, message: "Token tidak valid." };
  }
}
