"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Logo } from "./logo";
import { usePathname, useRouter } from "next/navigation";
import { BookX, Home, LogOut, Store, UserCircle, UserCog } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMutationAuth } from "@/api/auth/mutation";
import { useAtom, useAtomValue } from "jotai";
import { storeIsLogin } from "@/store/isLogin";
import { profileAtom } from "@/store/profile";

export const Header = () => {
  const dataProfile = useAtomValue(profileAtom);
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

  const router = useRouter();
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

  const [isLogin, setIsLogin] = useAtom(storeIsLogin);

  const { serviceAuth } = useMutationAuth();

  const handleLogout = async () => {
    await serviceAuth({
      type: "logout",
      body: "",
    });

    setIsLogin(false);
    router.push("/");
  };

  return (
    <div
      className={`bg-gradient-to-b from-neutral-950 via-neutral-950 ${
        scrolled && "bg-black/80"
      } fixed z-50 w-full max-w-screen-2xl mx-auto flex items-center justify-between px-5 md:px-10 lg:px-20 py-4`}
    >
      <Logo />
      <div className="fixed z-999999 bottom-0 left-0 w-full grid grid-cols-4 items-center bg-neutral-800 px-5 py-2 gap-4 lg:static lg:bg-transparent lg:flex lg:gap-20 lg:p-0 lg:justify-center">
        {itemHeader.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`flex flex-col gap-1 items-center ${
              isActiveLink(item.link) ? "text-white" : "text-neutral-400"
            }`}
          >
            <div className="lg:hidden">{item.icon}</div>
            <p className="text-xs lg:text-sm">{item.label}</p>
          </Link>
        ))}
      </div>
      {isLogin ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <UserCircle className="w-7 h-7 text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-40 mr-5 md:mr-10 lg:mr-16">
            <DropdownMenuLabel>
              <Link href={"/profile"} className="flex items-center gap-2">
                <UserCircle />
                {dataProfile?.username}
              </Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Dialog>
              <DialogTrigger className="w-full flex items-center justify-between text-danger p-2 text-sm">
                Keluar
                <LogOut size={16} />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-center">
                    Apakah Anda Yakin Ingin Keluar ?
                  </DialogTitle>
                  <div className="flex items-center justify-center gap-5 pt-5">
                    <DialogClose asChild>
                      <Button className="bg-slate-800 hover:bg-slate-900">
                        Batal
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button variant={"danger"} onClick={handleLogout}>
                        Keluar
                      </Button>
                    </DialogClose>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
      )}
    </div>
  );
};
