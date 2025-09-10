"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useAtom, useAtomValue } from "jotai";
import { storeProducts } from "@/store/products";
import { formatIDR } from "@/lib/formated";
import { useMutationTransaction } from "@/api/transaksi/mutations";
import { TypeTransaksiBody } from "@/api/transaksi/type";
import { storeIsLogin } from "@/store/isLogin";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import { profileAtom } from "@/store/profile";

export const Cart = () => {
  const dataThead = ["Barang", "Jumlah"];
  const [products, setProducts] = useAtom(storeProducts);
  const isLogin = useAtomValue(storeIsLogin);
  const dataProfile = useAtomValue(profileAtom);
  const router = useRouter();

  const { serviceTransaction, isPending } = useMutationTransaction();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isLogin) {
      alert("login terlebih dahulu");
      router.push("/login");
      return;
    }
    if (!products.data || products.data.length === 0) {
      return alert("Pilih produk yang akan dijual terlebih dahulu");
    }

    const cartData: TypeTransaksiBody = {
      TransaksiProduk: products.data
        ?.map((item) => {
          if (!item.id) {
            return null;
          }
          return {
            produkId: item.id,
            quantity: item.quantity || 0,
          };
        })
        .filter((item) => item !== null) as {
        produkId: string;
        quantity: number;
      }[],
    };

    const res = await serviceTransaction({
      type: "create",
      body: cartData,
    });

    if (res.status === 201) {
      setProducts({ data: [] });
      alert("anda berhasil menjual sampah");
    }
  };

  return (
    <div className="flex flex-col gap-5 sticky top-20">
      <p className="titleSection">Rincian Penjualan</p>

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
            {products.data && products.data.length > 0 ? (
              products.data.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-primary shadow border">
                        <Image
                          src={item.image}
                          alt="products"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </div>
                      <p>{item.product_name}</p>
                    </div>
                  </td>
                  <td className="p-2">
                    <Button variant={"outline"} size={"sm"} disabled>
                      {formatIDR(item.quantity! * item.price)}
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="text-center p-2 text-danger">
                  Silahkan pilih sampah yang akan dijual
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="border-2 border-primary overflow-hidden rounded-xl shadow-md p-2">
        <p className="titleContent text-primary border-b-2 border-primary pb-2">
          Total
        </p>
        <div className="grid grid-cols-3 justify-center mt-5">
          <div className="text-center">
            <p className="titleContent text-primary">{products.data?.length}</p>
            <p>Barang</p>
          </div>
          <div className="text-center">
            <p className="titleContent text-primary">
              {products.data?.reduce(
                (acc, item) => acc + (item.quantity || 0),
                0
              )}{" "}
              kg
            </p>
            <p>Kg</p>
          </div>
          <div className="text-center">
            <p className="titleContent text-primary">
              {formatIDR(
                products.data?.reduce(
                  (acc, item) => acc + item.price * (item?.quantity || 0),
                  0
                ) ?? 0
              )}
            </p>
            <p>Harga</p>
          </div>
        </div>
      </div>

      <Button variant={"danger"} onClick={handleSubmit}>
        {isPending ? <LoaderCircle /> : "JUAL SAMPAH"}
      </Button>
    </div>
  );
};
