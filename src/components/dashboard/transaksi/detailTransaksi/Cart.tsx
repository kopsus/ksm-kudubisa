import { Button } from "@/components/ui/button";
import { formatIDR } from "@/lib/formated";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ICart {
  cartItems: any[];
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isPending: boolean;
}

export const Cart = ({ cartItems, handleSubmit, isPending }: ICart) => {
  const dataThead = ["Barang", "Jumlah"];

  console.log("data cart", cartItems);

  return (
    <div className="flex flex-col gap-5 sticky top-20">
      <div className="border-2 border-primary overflow-hidden rounded-xl shadow-md">
        <table className="w-full overflow-x-auto">
          <thead>
            <tr className="bg-primary text-white">
              {dataThead.map((item) => (
                <th key={item} className="p-2 text-start">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-primary shadow border relative">
                      <Image
                        src={item?.image ?? ""}
                        alt="products"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        unoptimized
                      />
                    </div>
                    <p>{item?.product_name}</p>
                  </div>
                </td>
                <td className="p-2">
                  <Button variant={"outline"} size={"sm"} disabled>
                    {formatIDR((item.quantity || 0) * (item?.price || 0))}
                  </Button>
                </td>
              </tr>
            ))}
            {cartItems.length === 0 && (
              <tr>
                <td colSpan={2} className="text-center p-4 text-gray-500">
                  Keranjang kosong
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Rangkuman Total */}
      <div className="border-2 border-primary overflow-hidden rounded-xl shadow-md p-2">
        <p className="titleContent text-primary border-b-2 border-primary pb-2">
          Total
        </p>
        <div className="grid grid-cols-3 justify-center mt-5">
          <div className="text-center">
            <p className="titleContent text-primary">{cartItems.length}</p>
            <p>Barang</p>
          </div>
          <div className="text-center">
            <p className="titleContent text-primary">
              {cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0)}
            </p>
            <p>Kg</p>
          </div>
          <div className="text-center">
            <p className="titleContent text-primary">
              {formatIDR(
                cartItems.reduce(
                  (acc, item) =>
                    acc + (item?.price || 0) * (item.quantity || 0),
                  0,
                ),
              )}
            </p>
            <p>Harga</p>
          </div>
        </div>
      </div>

      <Button disabled={isPending} variant={"danger"} onClick={handleSubmit}>
        {isPending ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          "Simpan Perubahan"
        )}
      </Button>
    </div>
  );
};
