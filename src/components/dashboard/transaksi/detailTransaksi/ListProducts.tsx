"use client";

import React, { useEffect, useState } from "react";
import { SampahDipilah } from "./SampahDipilah";
import { SampahBelumDipilah } from "./SampahBelumDipilah";
import { getProducts } from "@/lib/action/productAction";

interface IListProducts {
  cartItems: any[];
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
}

export const ListProducts = ({ cartItems, setCartItems }: IListProducts) => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();
      if (res.success) {
        setProducts((res.data as any[]) || []);
      }
    };
    fetchProducts();
  }, []);

  const handleAdd = (produk: any) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.produkId === produk.id,
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.produkId === produk.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item,
        );
      } else {
        return [
          ...prevItems,
          {
            id: crypto.randomUUID(),
            transaksiId: "",
            produkId: produk.id,
            quantity: 1,
            produk: produk,
          },
        ];
      }
    });
  };

  const handleMin = (produkId: string) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.produkId === produkId);

      if (existingItem?.quantity === 1) {
        return prevItems.filter((item) => item.produkId !== produkId);
      } else if (existingItem) {
        return prevItems.map((item) =>
          item.produkId === produkId
            ? { ...item, quantity: (item.quantity || 0) - 1 }
            : item,
        );
      }
      return prevItems;
    });
  };

  return (
    <div className="flex flex-col gap-10 mt-10">
      {/* Lempar products dan cartItems sebagai props */}
      <SampahDipilah
        products={products}
        cartItems={cartItems}
        handleAdd={handleAdd}
        handleMin={handleMin}
      />
      <SampahBelumDipilah
        products={products}
        cartItems={cartItems}
        handleAdd={handleAdd}
        handleMin={handleMin}
      />
    </div>
  );
};
