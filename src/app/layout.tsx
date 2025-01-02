import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import { Query } from "@/providers/component";
import IsLogin from "@/lib/isLogin";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KSM Kudu Bisa",
  description: "KSM Kudu Bisa Desa Sirau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Query>
          {children}
          <IsLogin />
        </Query>
      </body>
    </html>
  );
}
