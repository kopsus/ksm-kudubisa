"use client";

import { useQueryGalleries } from "@/api/gallery/queries";
import { NextLightbox } from "@/components/_global/lightbox/Lightbox";
import Breadcrumb from "@/components/dashboard/_global/Breadcrumb";
import { DialogCreate } from "@/components/dashboard/gallery/DialogCreate";
import { DialogDelete } from "@/components/dashboard/gallery/DialogDelete";
import { useLightbox } from "@/hooks/useLightbox";
import { storeDialog } from "@/store/dialog";
import { useSetAtom } from "jotai";
import { Edit, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  const setDialog = useSetAtom(storeDialog);
  const { dataGallery } = useQueryGalleries();
  const lightbox = useLightbox();

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {dataGallery?.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              lightbox.open(
                index,
                dataGallery.map((d) => d.image)
              )
            }
            className="h-52 w-full rounded-lg shadow-1 overflow-hidden border relative group"
          >
            <div className="hidden group-hover:flex justify-center items-center gap-5 absolute top-0 left-0 w-full h-full bg-black/50">
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
            <Image
              src={item.image}
              alt={item.id!}
              width={0}
              height={0}
              sizes="100vw"
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
      <DialogDelete />
      <DialogCreate />
    </>
  );
};

export default GalleryPage;
