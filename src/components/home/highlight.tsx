import React from "react";
import highlightIMG from "@/assets/highlight_home.avif";
import { Button } from "../ui/button";

export const HighlightHome = () => {
  return (
    <div
      className="w-full relative bg-center"
      style={{ backgroundImage: `url(${highlightIMG.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
      <div className="relative h-[50vh] md:h-[70vh] lg:h-screen lg:max-h-[700px] flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-2 text-white w-1/2 mx-auto">
          <p className="titleHighlight">Lorem ipsum dolor sit amet</p>
          <p>
            Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <Button variant={"danger"}>JUAL SAMPAH SEKARANG</Button>
      </div>
    </div>
  );
};
