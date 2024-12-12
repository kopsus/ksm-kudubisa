"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { BookX, Home, Store, UserCog } from "lucide-react";

export const Header = () => {
  const itemHeader = [
    {
      label: "Beranda",
      link: "/",
      icon: <Home size={16} />,
    },
    {
      label: "Edukasi",
      link: "/edukasi",
      icon: <BookX size={16} />,
    },
    {
      label: "Layanan",
      link: "/layanan",
      icon: <UserCog size={16} />,
    },
    {
      label: "Tentang",
      link: "/tentang",
      icon: <Store size={16} />,
    },
  ];

  const pathname = usePathname();
  const isActiveLink = (href: string) => pathname === href;

  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-gradient-to-b from-neutral-950 via-neutral-950 ${
        scrolled && "bg-black/80"
      } fixed z-50 w-full max-w-screen-xl mx-auto flex items-center justify-between px-5 md:px-10 lg:px-20 py-4`}
    >
      <Logo />
      {/* <div className="hidden lg:flex items-center gap-20">
        {itemHeader.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`${
              isActiveLink(item.link) ? "text-white" : "text-neutral-400"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div> */}
      <div className="fixed bottom-0 left-0 w-full grid grid-cols-4 items-center bg-neutral-800 px-5 py-2 z-50 gap-4 lg:static lg:bg-transparent lg:flex lg:gap-20 lg:p-0 lg:justify-center">
        {itemHeader.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-1 items-center ${
              isActiveLink(item.link) ? "text-white" : "text-neutral-400"
            }`}
          >
            <div className="lg:hidden">{item.icon}</div>
            <Link href={item.link} className="text-xs lg:text-sm">
              {item.label}
            </Link>
          </div>
        ))}
      </div>
      <Link href={"/login"}>
        <Button>Login</Button>
      </Link>
    </div>
  );
};
