import React from "react";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { Album, ShoppingCart, Users } from "lucide-react";
import { getGalleries } from "@/lib/action/galleryActions";
import { getProducts } from "@/lib/action/productAction";
import { getUsers } from "@/lib/action/userAction";
import CardDataStats from "@/components/dashboard/_global/CardDataStats";
import { getTransactions } from "@/lib/action/transactionAction";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  let profile: any = null;
  if (token) {
    try {
      profile = jwt.verify(token, process.env.JWT_SECRET!);
    } catch (error) {
      console.error("Token tidak valid", error);
    }
  }

  const role = profile?.role;
  const userRt = profile?.rt;

  let totalGallery = 0;
  let totalProduct = 0;
  let totalUsers = 0;
  let totalTransactions = 0;

  if (role === "Admin") {
    const [resGallery, resProduct, resUsers, resTransactions] =
      await Promise.all([
        getGalleries(),
        getProducts(),
        getUsers(),
        getTransactions(),
      ]);

    totalGallery = resGallery.success
      ? (resGallery.data as any[])?.length || 0
      : 0;
    totalProduct = resProduct.success
      ? (resProduct.data as any[])?.length || 0
      : 0;
    totalUsers = resUsers.success ? (resUsers.data as any[])?.length || 0 : 0;
    totalTransactions = resTransactions.success
      ? (resTransactions.data as any[])?.length || 0
      : 0;
  } else if (role === "Pengepul") {
    const resTransactions = await getTransactions();
    const dataTransactions = resTransactions.success
      ? resTransactions.data
      : [];

    // Filter transaksi untuk Pengepul
    const filtered = dataTransactions.filter((item: any) => {
      return (
        item.updatedByAgen?.role === "Agen" ||
        (item.updatedByAgen?.role === "Admin" && role === "Pengepul")
      );
    });
    totalTransactions = filtered.length;
  } else if (role === "Agen") {
    const resTransactions = await getTransactions();
    const dataTransactions = resTransactions.success
      ? resTransactions.data
      : [];

    // Filter transaksi untuk Agen berdasarkan RT
    const filtered = dataTransactions.filter((item: any) => {
      return item.user?.rt === userRt;
    });
    totalTransactions = filtered.length;
  }

  // 4. Render UI
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {role === "Admin" && (
        <>
          <CardDataStats title="Total Gallery" total={totalGallery}>
            <Album className="text-primary" />
          </CardDataStats>
          <CardDataStats title="Total Produk" total={totalProduct}>
            <ShoppingCart className="text-primary" />
          </CardDataStats>
          <CardDataStats title="Total Transaksi" total={totalTransactions}>
            <ShoppingCart className="text-primary" />
          </CardDataStats>
          <CardDataStats title="Total Users" total={totalUsers}>
            <Users className="text-primary" />
          </CardDataStats>
        </>
      )}

      {role === "Pengepul" && (
        <CardDataStats title="Total Transaksi" total={totalTransactions}>
          <ShoppingCart className="text-primary" />
        </CardDataStats>
      )}

      {role === "Agen" && (
        <CardDataStats title="Total Transaksi" total={totalTransactions}>
          <ShoppingCart className="text-primary" />
        </CardDataStats>
      )}
    </div>
  );
}
