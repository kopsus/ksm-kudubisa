"use client";

import React from "react";
import { Button } from "../ui/button";
import { dataGallery } from "@/data/gallery";
import Image from "next/image";

export const Gallery = () => {
  const [visibleItems, setVisibleItems] = React.useState(3);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  const isAllItemsVisible = visibleItems >= dataGallery.length;

  return (
    <div className="Container flex flex-col items-center gap-10">
      <p className="titleSection">Gallery</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 w-full">
        {dataGallery.slice(0, visibleItems).map((item, index) => (
          <div
            key={index}
            className="h-40 md:h-52 lg:h-72 bg-white shadow border rounded-[20px] overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.id}
              width={0}
              height={0}
              sizes="100vw"
              className="hover:scale-105 transition-all"
            />
          </div>
        ))}
      </div>
      {!isAllItemsVisible && (
        <Button variant={"outline"} onClick={loadMore}>
          Lihat Lainnya
        </Button>
      )}
    </div>
  );
};
