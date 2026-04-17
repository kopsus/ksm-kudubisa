"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useLightbox } from "@/hooks/useLightbox";
import { NextLightbox } from "../_global/lightbox/Lightbox";
import { TypeGallery } from "@/types/gallery";

interface GalleryProps {
  dataGallery: TypeGallery[];
}

export const Gallery = ({ dataGallery }: GalleryProps) => {
  const [visibleItems, setVisibleItems] = React.useState(3);
  const lightbox = useLightbox();

  const loadMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  const isAllItemsVisible = visibleItems >= (dataGallery?.length || 0);

  return (
    <div className="Container flex flex-col items-center gap-10">
      <p className="titleSection">Gallery</p>

      {dataGallery?.length === 0 && (
        <p className="text-gray-500">Belum ada gambar yang tersedia.</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 w-full">
        {dataGallery?.slice(0, visibleItems).map((item, index) => (
          <div
            key={item.id || index}
            onClick={() =>
              lightbox.open(
                index,
                dataGallery.map((d) => d.image),
              )
            }
            className="h-40 md:h-52 lg:h-72 bg-white shadow border rounded-[20px] overflow-hidden relative cursor-pointer group"
          >
            <Image
              src={item.image}
              alt={`Gallery ${item.id}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
              unoptimized
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

      {!isAllItemsVisible && dataGallery?.length > 0 && (
        <Button variant={"outline"} onClick={loadMore}>
          Lihat Lainnya
        </Button>
      )}
    </div>
  );
};
