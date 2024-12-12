import React from "react";
import highlightIMG from "@/assets/highlight_home.avif";
import { Button } from "../ui/button";

export const HighlightHome = () => {
  return (
    <div
      className="w-full relative bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${highlightIMG.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
      <div className="relative h-[70vh] lg:h-screen lg:max-h-[800px] flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col text-center gap-4 text-white w-10/12 lg:w-1/2 mx-auto">
          <p className="titleHighlight">Lorem ipsum dolor sit amet</p>
          <p className="text-neutral-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do.
          </p>
        </div>
        <Button variant={"danger"}>JUAL SAMPAH SEKARANG</Button>
      </div>
    </div>
  );
};
