"use client";

import { useMutationTransaction } from "@/api/transaksi/mutations";
import { useQueryTransactionDetail } from "@/api/transaksi/queries";
import { TypeTransaksiBody } from "@/api/transaksi/type";
import { Cart } from "@/components/dashboard/transaksi/detailTransaksi/Cart";
import { ListProducts } from "@/components/dashboard/transaksi/detailTransaksi/ListProducts";
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
import { profileAtom } from "@/store/profile";
import { storeTransaksi } from "@/store/transaksi";
import { useAtom, useAtomValue } from "jotai";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const TransactionDetail = () => {
  const { detailTransaction } = useQueryTransactionDetail();
  const { serviceTransaction } = useMutationTransaction();
  const [transaksi, setTransaksi] = useAtom(storeTransaksi);
  const [payload, setPayload] = React.useState({
    statusUser: "",
    statusAgen: "",
    updatedByRoleAgen: "",
    updatedByRolePengepul: "",
  });
  const router = useRouter();

  const dataProfile = useAtomValue(profileAtom);

  const onValueChange = (value: string, name: string) => {
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Data awal
    const originalData = transaksi.data;

    // Tentukan data yang diubah
    const cartData: Partial<TypeTransaksiBody> = {};

    // Periksa perubahan pada statusUser
    if (payload.statusUser && payload.statusUser !== originalData?.statusUser) {
      cartData.statusUser = payload.statusUser;
    }

    // Periksa perubahan pada statusAgen
    if (payload.statusAgen && payload.statusAgen !== originalData?.statusAgen) {
      cartData.statusAgen = payload.statusAgen;
    }

    // Periksa perubahan pada updatedByRoleAgen
    if (
      payload.statusUser &&
      payload.updatedByRoleAgen !== originalData?.updatedByRoleAgen
    ) {
      cartData.updatedByRoleAgen = dataProfile?.role;
    }

    // Periksa perubahan pada updatedByRolePengepul
    if (
      payload.statusAgen &&
      String(payload.updatedByRolePengepul) !==
        String(originalData?.updatedByRolePengepul)
    ) {
      cartData.updatedByRolePengepul = dataProfile?.role;
    }

    // Pastikan TransaksiProduk tetap disertakan
    if (originalData?.TransaksiProduk) {
      const updatedTransaksiProduk = originalData.TransaksiProduk.filter(
        (item) => {
          const originalItem = originalData.TransaksiProduk.find(
            (orig) => orig.produkId === item.produkId
          );
          return originalItem?.quantity !== item.quantity;
        }
      );

      if (updatedTransaksiProduk.length > 0) {
        cartData.TransaksiProduk = updatedTransaksiProduk.map((item) => ({
          produkId: item.produkId,
          quantity: item.quantity || 0,
        }));
      } else {
        // Sertakan data lama jika tidak ada perubahan
        cartData.TransaksiProduk = originalData.TransaksiProduk.map((item) => ({
          produkId: item.produkId,
          quantity: item.quantity || 0,
        }));
      }
    }

    // Pastikan ada data yang dikirim
    if (Object.keys(cartData).length === 0) {
      console.log("Tidak ada perubahan yang dibuat");
      return;
    }

    // Kirim data
    const res = await serviceTransaction({
      type: "update",
      body: cartData,
      id: originalData?.id,
    });

    if (res.status === 201) {
      router.back();
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Detail Transaksi {detailTransaction?.user.username}
        </h2>
      </div>
      <Card>
        <div className="grid grid-cols-2 justify-start items-start mb-10">
          <div className="grid grid-cols-3 gap-5">
            <p>Username</p>
            <p className="col-span-2">: {detailTransaction?.user.username}</p>

            <p className="text-nowrap">Nama Lengkap</p>
            <p className="col-span-2">
              : {detailTransaction?.user.namaLengkap}
            </p>

            <p>No Telepon</p>
            <p className="col-span-2">: {detailTransaction?.user.noTlp}</p>

            <p>RT / RW</p>
            <p className="col-span-2">
              : {detailTransaction?.user.rt} / {detailTransaction?.user.rw}
            </p>

            <p>Status Transaksi User</p>
            <div className="col-span-2 flex gap-2">
              :
              {dataProfile?.role === "Pengepul" ? (
                <Badge
                  variant={
                    detailTransaction?.statusUser === "Process"
                      ? "process"
                      : detailTransaction?.statusUser === "Pending"
                      ? "pending"
                      : detailTransaction?.statusUser === "Paid"
                      ? "default"
                      : "failed"
                  }
                >
                  {detailTransaction?.statusUser === "Process"
                    ? "Process"
                    : detailTransaction?.statusUser === "Pending"
                    ? "Pending"
                    : detailTransaction?.statusUser === "Paid"
                    ? "Paid"
                    : "Failed"}
                </Badge>
              ) : (
                <Select
                  value={
                    payload.statusUser || detailTransaction?.statusUser || ""
                  }
                  onValueChange={(value) => onValueChange(value, "statusUser")}
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

            <p>Status Transaksi Pengepul</p>
            <div className="col-span-2 flex gap-2">
              :
              {dataProfile?.role === "Agen" ? (
                <Badge
                  variant={
                    detailTransaction?.statusAgen === "Process"
                      ? "process"
                      : detailTransaction?.statusAgen === "Pending"
                      ? "pending"
                      : detailTransaction?.statusAgen === "Paid"
                      ? "default"
                      : "failed"
                  }
                >
                  {detailTransaction?.statusAgen === "Process"
                    ? "Process"
                    : detailTransaction?.statusAgen === "Pending"
                    ? "Pending"
                    : detailTransaction?.statusAgen === "Paid"
                    ? "Paid"
                    : detailTransaction?.statusAgen === "Failed"
                    ? "failed"
                    : "belum ada status"}
                </Badge>
              ) : (
                <Select
                  value={
                    payload.statusAgen || detailTransaction?.statusAgen || ""
                  }
                  onValueChange={(value) => onValueChange(value, "statusAgen")}
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
          <Cart handleSubmit={handleSubmit} />
        </div>
        <ListProducts />
      </Card>
    </div>
  );
};

export default TransactionDetail;
