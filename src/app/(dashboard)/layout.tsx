import DefaultLayout from "@/components/dashboard/_global/Layouts/DefaultLayout";

export default function RootLayout({
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
