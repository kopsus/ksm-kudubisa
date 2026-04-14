"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Edit, Trash } from "lucide-react";
import Breadcrumb from "../_global/Breadcrumb";
import { DialogDelete } from "./DialogDelete";
import { DialogCreate } from "./DialogCreate";

// 1. Definisikan tipe untuk State Dialog kita (Pengganti Jotai)
export type DialogState = {
  type: "CREATE" | "UPDATE" | "DELETE" | null;
  show: boolean;
  data: any | null;
};

export interface TypeGallery {
  id: string;
  image: string;
}

interface GalleryViewProps {
  dataGallery: TypeGallery[];
}

const GalleryView = ({ dataGallery }: GalleryViewProps) => {
  // 2. Ganti useAtom menjadi useState biasa
  const [dialog, setDialog] = useState<DialogState>({
    type: null,
    show: false,
    data: null,
  });

  return (
    <>
      <Breadcrumb
        pageName="Gallery"
        onClick={() => {
          setDialog({
            type: "CREATE",
            show: true,
            data: null,
          });
        }}
      />

      {dataGallery.length === 0 && (
        <div className="text-center p-10 text-gray-500">
          Belum ada gambar di gallery.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {dataGallery.map((item, index) => (
          <div
            key={item.id || index}
            className="h-52 w-full rounded-lg shadow-1 overflow-hidden border relative group"
          >
            <div className="hidden group-hover:flex justify-center items-center gap-5 absolute top-0 left-0 w-full h-full bg-black/50 z-10">
              <Edit
                color="white"
                className="cursor-pointer"
                onClick={() => {
                  setDialog({
                    type: "UPDATE",
                    show: true,
                    data: item,
                  });
                }}
              />
              <Trash
                color="red"
                className="cursor-pointer"
                onClick={() => {
                  setDialog({
                    type: "DELETE",
                    show: true,
                    data: item.id,
                  });
                }}
              />
            </div>

            <div className="relative w-full h-full">
              <Image
                src={item.image} // INI PENYEBABNYA
                alt={`Gallery ${item.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 3. Lempar state dialog dan fungsi setDialog sebagai props */}
      <DialogDelete dialog={dialog} setDialog={setDialog} />
      <DialogCreate dialog={dialog} setDialog={setDialog} />
    </>
  );
};

export default GalleryView;
