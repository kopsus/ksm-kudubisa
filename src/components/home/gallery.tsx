"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useLightbox } from "@/hooks/useLightbox";
import { NextLightbox } from "../_global/lightbox/Lightbox";

// Kita export tipe ini agar bisa dipakai di Server Component
export interface TypeGallery {
  id: string;
  image: string;
}

// Komponen sekarang menerima props
interface GalleryProps {
  dataGallery: TypeGallery[];
}

export const Gallery = ({ dataGallery }: GalleryProps) => {
  const [visibleItems, setVisibleItems] = React.useState(3);
  const lightbox = useLightbox();

  const loadMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  // Pengecekan aman jika dataGallery kosong/undefined
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
                // Pastikan format map ini sesuai dengan yang diminta lightbox milikmu
                dataGallery.map((d) => d.image),
              )
            }
            // Tambahkan "relative" dan "cursor-pointer" di sini
            className="h-40 md:h-52 lg:h-72 bg-white shadow border rounded-[20px] overflow-hidden relative cursor-pointer group"
          >
            <Image
              src={item.image} // baseURL sudah dihapus (langsung path bawaan /uploads/...)
              alt={`Gallery ${item.id}`}
              fill // Gunakan fill menggantikan width & height
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
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
