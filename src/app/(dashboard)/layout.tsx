import DefaultLayout from "@/components/dashboard/_global/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin KSM KuduBisa",
  description: "Admin KSM KuduBisa Desa Sirau",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DefaultLayout>{children}</DefaultLayout>
    </>
  );
}
