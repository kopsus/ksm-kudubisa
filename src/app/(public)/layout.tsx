import { Footer } from "@/components/_global/footer";
import { Header } from "@/components/_global/header";
import ButtonTrigger from "@/components/_global/buttonTrigger";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ButtonTrigger />
    </>
  );
}
