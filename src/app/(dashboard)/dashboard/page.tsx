"use client";

import { useQueryProducts } from "@/api/produk/queries";
import { useQueryGalleries } from "@/api/gallery/queries";
import { useQueryTransaction } from "@/api/transaksi/queries";
import { useQueryProfile, useQueryUsers } from "@/api/users/queries";
import CardDataStats from "@/components/dashboard/_global/CardDataStats";
import { Album, ShoppingCart, Users } from "lucide-react";
import React from "react";

const Dashboard = () => {
  const { dataProfile } = useQueryProfile();
  const { dataGallery } = useQueryGalleries();
  const { dataProduct } = useQueryProducts();
  const { dataTransactions } = useQueryTransaction();
  const { dataUsers } = useQueryUsers();

  const role = dataProfile?.role?.role;

  const filteredDataPengepul =
    dataTransactions?.filter((item) => {
      return (
        item.updatedByAgen?.role === "Agen" ||
        (item.updatedByAgen?.role === "Admin" &&
          dataProfile?.role?.role === "Pengepul")
      );
    }) || [];

  const filteredDataAgen =
    dataTransactions?.filter((item) => {
      // Memastikan hanya pengguna dengan role "Masyarakat" dan rt yang sesuai yang ditampilkan
      return item.user.rt === dataProfile?.rt;
    }) || [];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {role === "Admin" ? (
        <>
          <CardDataStats title="Total Gallery" total={dataGallery?.length!}>
            <Album className="text-primary" />
          </CardDataStats>
          <CardDataStats title="Total Produk" total={dataProduct?.length!}>
            <ShoppingCart className="text-primary" />
          </CardDataStats>
          <CardDataStats
            title="Total Transaksi"
            total={dataTransactions?.length!}
          >
            <ShoppingCart className="text-primary" />
          </CardDataStats>
          <CardDataStats title="Total Users" total={dataUsers?.length!}>
            <Users className="text-primary" />
          </CardDataStats>
        </>
      ) : role === "Pengepul" ? (
        <CardDataStats
          title="Total Transaksi"
          total={filteredDataPengepul?.length}
        >
          <ShoppingCart className="text-primary" />
        </CardDataStats>
      ) : (
        <CardDataStats title="Total Transaksi" total={filteredDataAgen?.length}>
          <ShoppingCart className="text-primary" />
        </CardDataStats>
      )}
    </div>
  );
};

export default Dashboard;
