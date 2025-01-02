import { TypeProducts } from "@/api/produk/type";
import { storeTransaksi } from "@/store/transaksi";
import { useAtom } from "jotai";
import React from "react";
import { SampahDipilah } from "./SampahDipilah";
import { SampahBelumDipilah } from "./SampahBelumDipilah";

export const ListProducts = () => {
  const [_, setTransaksi] = useAtom(storeTransaksi);

  const handleAdd = (produk: TypeProducts) => {
    setTransaksi((prev) => {
      const existingItem = prev.data?.TransaksiProduk.find(
        (item) => item.produkId === produk.id
      );

      if (existingItem) {
        // Jika item sudah ada, tambahkan quantity
        return {
          ...prev,
          data: {
            ...prev.data!,
            TransaksiProduk: prev.data!.TransaksiProduk.map((item) =>
              item.produkId === produk.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          },
        };
      } else {
        // Jika item belum ada, tambahkan item baru
        return {
          ...prev,
          data: {
            ...prev.data!,
            TransaksiProduk: [
              ...(prev.data?.TransaksiProduk || []),
              {
                id: crypto.randomUUID(), // Buat ID unik
                transaksiId: prev.data!.id,
                produkId: produk.id!,
                quantity: 1,
                produk,
              },
            ],
          },
        };
      }
    });
  };

  const handleMin = (produkId: string) => {
    setTransaksi((prev) => {
      const existingItem = prev.data?.TransaksiProduk.find(
        (item) => item.produkId === produkId
      );

      if (existingItem?.quantity === 1) {
        // Jika quantity menjadi 0, hapus item
        return {
          ...prev,
          data: {
            ...prev.data!,
            TransaksiProduk: prev.data!.TransaksiProduk.filter(
              (item) => item.produkId !== produkId
            ),
          },
        };
      } else {
        // Jika quantity > 1, kurangi quantity
        return {
          ...prev,
          data: {
            ...prev.data!,
            TransaksiProduk: prev.data!.TransaksiProduk.map((item) =>
              item.produkId === produkId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          },
        };
      }
    });
  };

  return (
    <div className="flex flex-col gap-10">
      <SampahDipilah handleAdd={handleAdd} handleMin={handleMin} />
      <SampahBelumDipilah handleAdd={handleAdd} handleMin={handleMin} />
    </div>
  );
};
