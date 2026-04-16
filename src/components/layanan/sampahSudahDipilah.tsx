"use client";

import React from "react";
import { CardSampah } from "./cardSampah";

export const SampahSudahDipilah = ({
  dataProduct,
  cartItems,
  handleAdd,
  handleMin,
}: any) => {
  return (
    <div>
      <p className="titleContent w-max border-b-2 border-primary pb-2 mb-5">
        Sampah Sudah Dipilah
      </p>
      <div
        className="grid lg:grid-cols-2 gap-5 w-full min-h-40 max-h-96 overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {dataProduct?.map((item: any) => {
          if (item.jenis === "SudahDiPilah") {
            const qtyInCart =
              cartItems.find((c: any) => c.id === item.id)?.quantity || 0;

            return (
              <CardSampah
                key={item.id}
                item={item}
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
