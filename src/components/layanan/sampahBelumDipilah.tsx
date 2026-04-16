"use client";

import React from "react";
import { CardSampah } from "./cardSampah";

export const SampahBelumDipilah = ({
  dataProduct,
  cartItems,
  handleAdd,
  handleMin,
}: any) => {
  return (
    <div>
      <p className="titleContent w-max border-b-2 border-primary pb-2 mb-5">
        Sampah Belum Dipilah
      </p>
      <p className="text-neutral-400 mb-5">
        *Sampah yang belum dipilah memiliki nilai jual yang lebih rendah
      </p>
      <div className="grid lg:grid-cols-2 gap-5 w-full">
        {dataProduct?.map((item: any) => {
          if (item.jenis === "BelumDiPilah") {
            // Cari apakah barang ini sudah ada di keranjang
            const qtyInCart =
              cartItems.find((c: any) => c.id === item.id)?.quantity || 0;

            return (
              <CardSampah
                key={item.id}
                item={item} // Kirim full object item agar bisa di-add
                quantity={qtyInCart}
                handleAdd={handleAdd}
                handleMin={handleMin}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
