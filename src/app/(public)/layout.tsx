import { Footer } from "@/components/_global/footer";
import { Header } from "@/components/_global/header";
import ButtonTrigger from "@/components/_global/buttonTrigger";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KSM KuduBisa",
  description: "KSM KuduBisa Desa Sirau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
      <ButtonTrigger />
    </div>
  );
}
