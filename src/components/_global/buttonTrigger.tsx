"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import iconIMG from "@/assets/icon_chat.svg";

const ButtonTrigger = () => {
  return (
    <Link
      href={"/layanan"}
      className="fixed bottom-16 md:bottom-20 lg:bottom-10 right-[2%] h-10 lg:h-12 2xl:right-[12%]"
    >
      <Image src={iconIMG} alt="" width={0} height={0} sizes="100vw" />
    </Link>
  );
};

export default ButtonTrigger;
