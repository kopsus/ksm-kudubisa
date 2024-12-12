import React from "react";
import highlightIMG from "@/assets/highlight_home.avif";
import { Button } from "../ui/button";

interface IHighlight {
  title: string;
  desc?: string;
  textButton?: string;
}

export const Highlight = ({ title, desc, textButton }: IHighlight) => {
  return (
    <div
      className="w-full relative bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${highlightIMG.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
      <div className="relative h-[50vh] flex flex-col items-center justify-center pt-10 text-center gap-4 text-white w-1/2 mx-auto">
        <p className="titleHighlight">{title}</p>
        <p className="text-neutral-300">{desc}</p>
        {textButton && <Button variant={"danger"}>{textButton}</Button>}
      </div>
    </div>
  );
};
