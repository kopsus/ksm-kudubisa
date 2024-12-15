import DefaultLayout from "@/components/dashboard/Layouts/DefaultLayout";

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
