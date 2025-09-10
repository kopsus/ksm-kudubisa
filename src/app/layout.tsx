import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import { Query } from "@/providers/component";
import { JotaiProviderInitializer } from "@/components/jotai/JotaiProviderInitializer";
import { getProfileFromCookie } from "@/lib/aut";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KSM Kudu Bisa",
  description: "KSM Kudu Bisa Desa Sirau",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profile = await getProfileFromCookie();
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Query>
          <JotaiProviderInitializer profile={profile} />
          {children}
        </Query>
      </body>
    </html>
  );
}
