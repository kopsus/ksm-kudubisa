import React from "react";
import ketuaIMG from "@/assets/ketua.png";
import Image from "next/image";

export const SambutanKetua = () => {
  return (
    <div className="Container">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch justify-stretch gap-10 lg:gap-20 rounded-xl shadow-md shadow-black/25 border bg-white overflow-hidden p-5 md:p-10">
        <div className="order-2 lg:order-1 lg:col-span-2 flex flex-col gap-4">
          <p className="titleContent">
            Selamat Datang di Kelompok Swadaya Masyarakat KMM
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-1">
          <div className="w-1/2 md:w-1/3 lg:w-3/4 mx-auto">
            <Image src={ketuaIMG} alt="" width={0} height={0} sizes="100vw" />
          </div>
        </div>
      </div>
    </div>
  );
};
