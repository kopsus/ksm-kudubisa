"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { statusesTransaksi } from "@/data/transaksi";

import { Cart } from "@/components/dashboard/transaksi/detailTransaksi/Cart";
import { ListProducts } from "@/components/dashboard/transaksi/detailTransaksi/ListProducts";
import { updateTransaction } from "@/lib/action/transactionAction";

interface TransactionDetailViewProps {
  initialData: any;
  userRole: string;
}

const TransactionDetailView = ({
  initialData,
  userRole,
}: TransactionDetailViewProps) => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  // State untuk status transaksi
  const [payload, setPayload] = useState({
    statusUser: initialData?.statusUser || "",
    statusAgen: initialData?.statusAgen || "",
  });

  // State PENGGANTI Jotai (storeTransaksi) untuk menampung perubahan item keranjang
  const [cartItems, setCartItems] = useState<any[]>(
    initialData?.TransaksiProduk || [],
  );

  const onValueChange = (value: string, name: string) => {
    setPayload((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsPending(true);

    const cartData: any = {};

    // 1. Cek perubahan Status User (Untuk Agen)
    if (payload.statusUser !== initialData?.statusUser) {
      cartData.statusUser = payload.statusUser;
      cartData.updatedByRoleAgen = userRole;
    }

    // 2. Cek perubahan Status Agen (Untuk Pengepul)
    if (payload.statusAgen !== initialData?.statusAgen) {
      cartData.statusAgen = payload.statusAgen;
      cartData.updatedByRolePengepul = userRole;
    }

    // 3. Sertakan Produk Keranjang jika ada yang diubah
    // (Bandingkan JSON stringify untuk cara termudah mengecek perbedaan array)
    const originalCartString = JSON.stringify(initialData?.TransaksiProduk);
    const currentCartString = JSON.stringify(cartItems);

    if (originalCartString !== currentCartString) {
      cartData.TransaksiProduk = cartItems.map((item) => ({
        produkId: item.produkId,
        quantity: item.quantity || 0,
      }));
    }

    // 4. Jika tidak ada yang berubah, batalkan
    if (Object.keys(cartData).length === 0) {
      setIsPending(false);
      alert("Tidak ada perubahan yang dibuat.");
      return;
    }

    // 5. Eksekusi Server Action
    const res = await updateTransaction(initialData.id, cartData);

    setIsPending(false);

    if (res.success) {
      alert("Transaksi berhasil diperbarui!");
      router.back();
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <ArrowLeft
          onClick={() => router.back()}
          className="cursor-pointer hover:text-gray-500"
        />
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Detail Transaksi {initialData?.user?.username}
        </h2>
      </div>

      <Card>
        <div className="grid grid-cols-2 justify-start items-start mb-10 p-5">
          <div className="grid grid-cols-3 gap-5">
            <p>Username</p>
            <p className="col-span-2">: {initialData?.user?.username}</p>

            <p className="text-nowrap">Nama Lengkap</p>
            <p className="col-span-2">: {initialData?.user?.namaLengkap}</p>

            <p>No Telepon</p>
            <p className="col-span-2">: {initialData?.user?.noTlp}</p>

            <p>RT / RW</p>
            <p className="col-span-2">
              : {initialData?.user?.rt} / {initialData?.user?.rw}
            </p>

            {/* STATUS TRANSAKSI USER (AGEN YANG UBAH) */}
            <p>Status Transaksi User</p>
            <div className="col-span-2 flex items-center gap-2">
              <span>:</span>
              {userRole === "Pengepul" ? (
                <Badge variant={payload.statusUser.toLowerCase() as any}>
                  {payload.statusUser || "Pending"}
                </Badge>
              ) : (
                <Select
                  value={payload.statusUser}
                  onValueChange={(val) => onValueChange(val, "statusUser")}
                >
                  <SelectTrigger className="w-auto">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusesTransaksi.map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            {/* STATUS TRANSAKSI PENGEPUL (PENGEPUL YANG UBAH) */}
            <p>Status Transaksi Pengepul</p>
            <div className="col-span-2 flex items-center gap-2">
              <span>:</span>
              {userRole === "Agen" ? (
                <Badge
                  variant={
                    payload.statusAgen
                      ? (payload.statusAgen.toLowerCase() as any)
                      : "default"
                  }
                >
                  {payload.statusAgen || "Belum ada status"}
                </Badge>
              ) : (
                <Select
                  value={payload.statusAgen}
                  onValueChange={(val) => onValueChange(val, "statusAgen")}
                >
                  <SelectTrigger className="w-auto">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusesTransaksi.map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          </div>

          {/* LEMPAR PROPS KE CART */}
          <Cart
            cartItems={cartItems}
            handleSubmit={handleSubmit}
            isPending={isPending}
          />
        </div>

        {/* LEMPAR PROPS KE LIST PRODUCTS */}
        <ListProducts cartItems={cartItems} setCartItems={setCartItems} />
      </Card>
    </div>
  );
};

export default TransactionDetailView;
