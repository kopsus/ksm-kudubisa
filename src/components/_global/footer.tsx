import React from "react";

// components
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

// assets
import communityIMG from "@/assets/community.avif";
import Link from "next/link";

export const Footer = () => {
  return (
    <div
      className="relative bg-center bg-cover bg-no-repeat pb-10 md:pb-20 lg:pb-0"
      style={{ backgroundImage: `url(${communityIMG.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/80" />
      <div className="relative h-full flex flex-col gap-10 items-center justify-center w-10/12 md:w-3/4 mx-auto py-10 text-white text-center">
        <div className="flex flex-col items-center gap-5">
          <Logo />
          <div className="flex flex-col gap-2">
            <p className="titleContent">
              Sampahmu berharga, tukarkan dengan manfaat!
            </p>
            <p className="italic text-neutral-300">
              Setiap tindakan kecil kita dapat membuat perubahan besar bagi
              lingkungan.
            </p>
          </div>
          <Link href={"/login"}>
            <Button variant={"danger"}>GABUNG SEKARANG</Button>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <p>Berkolaborasi dengan Dinas Lingkungan Hidup Kabupaten Banyumas</p>
          <p>Copyright © 2023 Kelompok Swadaya Masyarakat KMM</p>
        </div>
      </div>
    </div>
  );
};
