"use client";

import React, { useState } from "react";
import { SampahSudahDipilah } from "./sampahSudahDipilah";
import { SampahBelumDipilah } from "./sampahBelumDipilah";
import { Cart } from "./cart";

export default function LayananClient({
  dataProduct,
  userProfile,
}: {
  dataProduct: any[];
  userProfile: any;
}) {
  // PENGGANTI JOTAI: State keranjang
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Fungsi Tambah Barang
  const handleAdd = (produk: any) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === produk.id);
      if (existing) {
        return prev.map((item) =>
          item.id === produk.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...produk, quantity: 1 }];
    });
  };

  // Fungsi Kurang Barang
  const handleMin = (produkId: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === produkId);
      if (existing?.quantity === 1) {
        return prev.filter((item) => item.id !== produkId); // Hapus jika 0
      }
      return prev.map((item) =>
        item.id === produkId ? { ...item, quantity: item.quantity - 1 } : item,
      );
    });
  };

  return (
    <div className="Container grid md:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-10 mt-10">
      <div className="col-span-1 lg:col-span-2 flex flex-col gap-10">
        {/* Lempar data dan fungsi ke daftar sampah */}
        <SampahSudahDipilah
          dataProduct={dataProduct}
          cartItems={cartItems}
          handleAdd={handleAdd}
          handleMin={handleMin}
        />
        <SampahBelumDipilah
          dataProduct={dataProduct}
          cartItems={cartItems}
          handleAdd={handleAdd}
          handleMin={handleMin}
        />
      </div>
      <div className="col-span-1 relative">
        {/* Lempar data keranjang dan profil ke Cart */}
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          userProfile={userProfile}
        />
      </div>
    </div>
  );
}
