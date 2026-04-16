import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import HeaderClient from "./headerClient";

export const Header = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  let userProfile = null;

  if (token) {
    try {
      userProfile = jwt.verify(token, process.env.JWT_SECRET!);
    } catch (error) {
      console.error("Token invalid di public Header");
    }
  }

  return <HeaderClient userProfile={userProfile} />;
};
