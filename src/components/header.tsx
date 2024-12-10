"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";

export const Header = () => {
  const itemHeader = [
    {
      label: "Beranda",
      link: "/",
    },
    {
      label: "Edukasi",
      link: "/edukasi",
    },
    {
      label: "Layanan",
      link: "/layanan",
    },
    {
      label: "Tentang",
      link: "/tentag",
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
      } fixed z-50 w-full max-w-screen-2xl mx-auto flex items-center justify-between px-20 py-4`}
    >
      <Logo />
      <div className="flex items-center gap-20">
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
      </div>
      <Button>Login</Button>
    </div>
  );
};
