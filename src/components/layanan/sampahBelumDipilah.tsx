import { dataProducts } from "@/data/product";
import React from "react";
import { CardSampah } from "./cardSampah";

export const SampahBelumDipilah = () => {
  return (
    <div>
      <p className="titleSection w-max border-b-2 border-primary pb-2 mb-5">
        Sampah Belum Dipilah
      </p>
      <p className="text-neutral-400 mb-5">
        *Sampah yang belum dipilah memiliki nilai jual yang lebih rendah
      </p>
      <div className="grid lg:grid-cols-2 gap-5 w-full">
        {dataProducts.map(
          (item, index) =>
            item.jenis === "belum" && (
              <CardSampah
                key={index}
                id={item.id}
                img={item.image}
                name={item.name}
                price={item.price}
              />
            )
        )}
      </div>
    </div>
  );
};
