import { Header } from "@/components/_global/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <main>{children}</main>
    </div>
  );
}
