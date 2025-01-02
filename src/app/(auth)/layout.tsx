import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mari Bergabung",
  description: "KSM KuduBisa Desa Sirau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="max-w-screen-2xl mx-auto">{children}</main>;
}
