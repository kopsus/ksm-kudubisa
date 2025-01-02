"use client";

import React from "react";
import { CardSampah } from "./cardSampah";
import { useQueryProducts } from "@/api/produk/queries";

export const SampahSudahDipilah = () => {
  const { dataProduct } = useQueryProducts();
  return (
    <div>
      <p className="titleContent w-max border-b-2 border-primary pb-2 mb-5">
        Sampah Sudah Dipilah
      </p>
      <div
        className="grid lg:grid-cols-2 gap-5 w-full min-h-40 max-h-96 overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {dataProduct?.map(
          (item, index) =>
            item.jenis?.jenisSampah === "SudahDiPilah" && (
              <CardSampah
                key={index}
                id={item.id!}
                img={item.image}
                name={item.product_name}
                price={item.price}
              />
            )
        )}
      </div>
    </div>
  );
};
