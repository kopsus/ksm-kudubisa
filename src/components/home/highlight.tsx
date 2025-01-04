import React from "react";
import highlightIMG from "@/assets/highlight.jpg";
import { Button } from "../ui/button";
import Link from "next/link";

export const HighlightHome = () => {
  return (
    <div
      className="w-full relative bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${highlightIMG.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
      <div className="relative h-[70vh] lg:h-screen lg:max-h-[800px] flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col text-center gap-4 text-white w-10/12 lg:w-1/2 mx-auto">
          <p className="titleHighlight">Ubah Sampah Anda Jadi Berkah!</p>
          <p className="text-neutral-300">
            Jangan biarkan sampah menumpuk. Dengan langkah kecil, Anda bisa
            membantu lingkungan sekaligus mendapatkan manfaat lebih! Ayo
            bergabung bersama kami untuk menciptakan dunia yang lebih bersih dan
            hijau.
          </p>
        </div>
        <Link href={"/layanan"}>
          <Button variant={"danger"}>JUAL SAMPAH SEKARANG</Button>
        </Link>
      </div>
    </div>
  );
};
