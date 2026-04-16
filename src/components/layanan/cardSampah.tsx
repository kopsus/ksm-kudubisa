// components/CardSampah.tsx (Sesuaikan path)
"use client";

import { formatIDR } from "@/lib/formated";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button"; // Sesuaikan path

// Sesuaikan interface untuk menerima parameter baru
interface ICardSampah {
  item: any; // Menerima full object produk
  quantity: number; // Menerima jumlah qty saat ini di keranjang
  handleAdd: (produk: any) => void;
  handleMin: (produkId: string) => void;
}

export const CardSampah = ({
  item,
  quantity,
  handleAdd,
  handleMin,
}: ICardSampah) => {
  return (
    <div className="grid grid-cols-2 items-start justify-start gap-5">
      {/* Tambahkan class relative agar Image Next.js tidak error dengan prop fill */}
      <div className="rounded-xl overflow-hidden shadow-md border w-full h-32 relative">
        <Image
          src={item.image}
          alt={item.product_name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-col gap-2">
        <p>{item.product_name}</p>
        <p className="titleContent text-danger">{formatIDR(item.price)} / kg</p>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={() => handleMin(item.id)} // Lempar ID-nya saja ke handleMin
            className="bg-primary"
            disabled={quantity === 0} // Matikan tombol minus kalau jumlahnya 0
          >
            -
          </Button>

          <Button variant="outline" disabled>
            {quantity} {/* Langsung tampilkan quantity dari Props! */}
          </Button>

          <Button
            size="sm"
            onClick={() => handleAdd(item)} // Lempar seluruh objek item ke handleAdd
            className="bg-primary"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
