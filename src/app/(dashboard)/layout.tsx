import DefaultLayout from "@/components/dashboard/_global/Layouts/DefaultLayout";
import { Metadata } from "next";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const metadata: Metadata = {
  title: "Admin KSM KuduBisa",
  description: "Admin KSM KuduBisa Desa Sirau",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 1. Ambil Token dan Decode Profil User di Server
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  let userProfile = null;

  if (token) {
    try {
      userProfile = jwt.verify(token, process.env.JWT_SECRET!);
    } catch (error) {
      console.error("Token invalid di layout");
    }
  }

  return (
    <>
      {/* 2. Lempar data profil ke Client Layout */}
      <DefaultLayout userProfile={userProfile}>{children}</DefaultLayout>
    </>
  );
}
