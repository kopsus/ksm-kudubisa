import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyToken } from "../../middleware/verifyToken";

export async function DELETE(req: Request) {
  const decoded = await verifyToken(req);
  if (decoded instanceof Response) {
    return decoded;
  }
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  return NextResponse.json({ message: "anda berhasil logout!!" });
}
