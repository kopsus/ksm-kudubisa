"use client";

import { useQueryTransaction } from "@/api/transaksi/queries";
import { DialogDelete } from "@/components/dashboard/transaksi/dialog/DialogDelete";
import { Columns } from "@/components/dashboard/transaksi/table/Columns";
import { DataTable } from "@/components/dashboard/transaksi/table/DataTable";
import { profileAtom } from "@/store/profile";
import { useAtomValue } from "jotai";

const TransaksiMayarakat = () => {
  const dataProfile = useAtomValue(profileAtom);
  const { dataTransactions } = useQueryTransaction();

  const filteredData =
    dataTransactions?.filter((item) => {
      // Jika role adalah 'Agen', tampilkan hanya transaksi dengan rt yang sesuai
      if (dataProfile?.role === "Agen") {
        return item.user.rt === dataProfile?.rt;
      }
      // Jika role adalah 'Admin', tampilkan semua transaksi
      if (dataProfile?.role !== "Pengepul") {
        return item; // Menampilkan semua transaksi
      }
      return false; // Untuk kasus lain, bisa diatur sesuai kebutuhan
    }) || [];

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Transaksi Agen
        </h2>
      </div>
      <h2 className="text-title-md2 font-semibold text-black mb-5 dark:text-white"></h2>
      <DataTable columns={Columns} data={filteredData} />
      <DialogDelete />
    </>
  );
};

export default TransaksiMayarakat;
