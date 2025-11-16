"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useQueryGalleries } from "@/api/gallery/queries";
import { useLightbox } from "@/hooks/useLightbox";
import { NextLightbox } from "../_global/lightbox/Lightbox";
import { baseURL } from "@/constants/variables";

export const Gallery = () => {
  const { dataGallery } = useQueryGalleries();
  const [visibleItems, setVisibleItems] = React.useState(3);
  const lightbox = useLightbox();

  const loadMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  const isAllItemsVisible = visibleItems >= dataGallery?.length!;

  return (
    <div className="Container flex flex-col items-center gap-10">
      <p className="titleSection">Gallery</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 w-full">
        {dataGallery?.slice(0, visibleItems).map((item, index) => (
          <div
            key={index}
            onClick={() =>
              lightbox.open(
                index,
                dataGallery.map((d) => d.image)
              )
            }
            className="h-40 md:h-52 lg:h-72 bg-white shadow border rounded-[20px] overflow-hidden"
          >
            <Image
              src={baseURL + item.image}
              alt={item.id!}
              width={0}
              height={0}
              sizes="100vw"
              className="hover:scale-105 transition-all"
            />
          </div>
        ))}
        <NextLightbox
          index={lightbox.index}
          visible={lightbox.visible}
          slides={lightbox.slides}
          onClose={lightbox.close}
        />
      </div>
      {!isAllItemsVisible && (
        <Button variant={"outline"} onClick={loadMore}>
          Lihat Lainnya
        </Button>
      )}
    </div>
  );
};
