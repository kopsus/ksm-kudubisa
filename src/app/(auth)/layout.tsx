import ButtonTrigger from "@/components/_global/buttonTrigger";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <ButtonTrigger />
    </main>
  );
}
