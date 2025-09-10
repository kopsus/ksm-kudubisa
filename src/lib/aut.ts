import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { TypeUser } from "@/api/users/type";

export async function getProfileFromCookie() {
  const token = (await cookies()).get("accessToken")?.value;

  if (!token) {
    return null;
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload as TypeUser;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}
