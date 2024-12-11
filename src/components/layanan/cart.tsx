import React from "react";
import { Button } from "../ui/button";
import sampahIMG from "@/assets/besi.jpg";
import Image from "next/image";

export const Cart = () => {
  const dataThead = ["Barang", "Jumlah"];

  return (
    <div>
      <p className="titleSection mb-5">Rincian Penjualan</p>
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
            <tr>
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <div className="w-16  h-16 rounded-xl overflow-hidden bg-primary shadow border">
                    <Image
                      src={sampahIMG}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <p>Kuningan</p>
                </div>
              </td>
              <td className="p-2">
                <Button variant={"outline"} disabled>
                  0.5
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="border-2 border-primary overflow-hidden rounded-xl shadow-md p-2 mt-10">
        <p className="titleContent text-primary border-b-2 border-primary pb-2">
          Total
        </p>
        <div className="grid grid-cols-3 justify-center mt-5">
          <div className="text-center">
            <p className="titleContent text-primary">0</p>
            <p>Barang</p>
          </div>
          <div className="text-center">
            <p className="titleContent text-primary">0</p>
            <p>Kg</p>
          </div>
          <div className="text-center">
            <p className="titleContent text-primary">0</p>
            <p>Harga</p>
          </div>
        </div>
      </div>
    </div>
  );
};
