import DefaultLayout from "@/components/dashboard/_global/Layouts/DefaultLayout";
import { getProfileFromCookie } from "@/lib/aut";
import { Metadata } from "next";
import { JotaiProviderInitializer } from "@/components/jotai/JotaiProviderInitializer";

export const metadata: Metadata = {
  title: "Admin KSM KuduBisa",
  description: "Admin KSM KuduBisa Desa Sirau",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profile = await getProfileFromCookie();
  return (
    <>
      <JotaiProviderInitializer profile={profile} />
      <DefaultLayout>{children}</DefaultLayout>
    </>
  );
}
