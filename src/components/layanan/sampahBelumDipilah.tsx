"use client";

import React from "react";
import { CardSampah } from "./cardSampah";
import { useQueryProducts } from "@/api/produk/queries";
import { baseURL } from "@/constants/variables";

export const SampahBelumDipilah = () => {
  const { dataProduct } = useQueryProducts();
  return (
    <div>
      <p className="titleContent w-max border-b-2 border-primary pb-2 mb-5">
        Sampah Belum Dipilah
      </p>
      <p className="text-neutral-400 mb-5">
        *Sampah yang belum dipilah memiliki nilai jual yang lebih rendah
      </p>
      <div className="grid lg:grid-cols-2 gap-5 w-full">
        {dataProduct?.map(
          (item, index) =>
            item.jenis === "BelumDiPilah" && (
              <CardSampah
                key={index}
                id={item.id!}
                img={baseURL + item.image}
                name={item.product_name}
                price={item.price}
              />
            )
        )}
      </div>
    </div>
  );
};
