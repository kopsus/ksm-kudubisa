import React from "react";
import { dataProducts } from "@/data/product";
import { CardSampah } from "./cardSampah";

export const SampahSudahDipilah = () => {
  return (
    <div>
      <p className="titleSection w-max border-b-2 border-primary pb-2 mb-5">
        Sampah Sudah Dipilah
      </p>
      <div
        className="grid lg:grid-cols-2 gap-5 w-full max-h-96 overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {dataProducts.map(
          (item, index) =>
            item.jenis === "dipilah" && (
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
