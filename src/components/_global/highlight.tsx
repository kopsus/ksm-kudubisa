import React from "react";
import highlightIMG from "@/assets/highlight.jpg";
import { Button } from "../ui/button";
import Link from "next/link";

interface IHighlight {
  title: string;
  desc?: string;
  textButton?: string;
  href?: string;
}

export const Highlight = ({ title, desc, textButton, href }: IHighlight) => {
  return (
    <div
      className="w-full relative bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${highlightIMG.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
      <div className="relative h-72 flex flex-col items-center justify-center pt-10 text-center gap-4 text-white w-10/12 lg:w-1/2 mx-auto">
        <p className="titleHighlight">{title}</p>
        <p className="text-neutral-300">{desc}</p>
        <Link href={`/${href}`}>
          {textButton && <Button variant={"danger"}>{textButton}</Button>}
        </Link>
      </div>
    </div>
  );
};
