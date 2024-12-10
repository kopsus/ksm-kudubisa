import Image from "next/image";
import React from "react";
import LogoIMG from "@/assets/logo.png";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <Image src={LogoIMG} alt="" width={0} height={0} sizes="100vw" />
      </div>
      <p className="text-xl text-white">KSM KMM</p>
    </div>
  );
};
