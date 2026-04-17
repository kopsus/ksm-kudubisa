"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatIDR } from "@/lib/formated";
export interface ISampahProps {
  products: any[];
  cartItems: any[];
  handleAdd: (produk: any) => void;
  handleMin: (produkId: string) => void;
}

export const SampahDipilah = ({
  products,
  cartItems,
  handleAdd,
  handleMin,
}: ISampahProps) => {
  return (
    <div>
      <p className="titleContent w-max border-b-2 border-primary pb-2 mb-5">
        Sampah Sudah Dipilah
      </p>
      <div
        className="grid lg:grid-cols-2 gap-5 w-full min-h-40 max-h-96 overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {products?.map(
          (item, index) =>
            item.jenis === "SudahDiPilah" && (
              <div
                key={index}
                className="grid grid-cols-2 items-start justify-start gap-5"
              >
                {/* Tambahkan relative agar layout image Next.js tidak error */}
                <div className="rounded-xl overflow-hidden shadow-md border w-full h-32 relative">
                  <Image
                    src={item.image}
                    alt={item.product_name}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p>{item.product_name}</p>
                  <p className="titleContent text-danger">
                    {formatIDR(item.price)} / kg
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => handleMin(item.id!)}
                      size="sm"
                      className="bg-primary"
                    >
                      -
                    </Button>
                    <Button variant="outline" disabled>
                      {/* Cari quantity dari cartItems yang dilempar dari ListProducts */}
                      {cartItems.find((product) => product.produkId === item.id)
                        ?.quantity || 0}
                    </Button>
                    <Button
                      onClick={() => handleAdd(item)}
                      size="sm"
                      className="bg-primary"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
};
