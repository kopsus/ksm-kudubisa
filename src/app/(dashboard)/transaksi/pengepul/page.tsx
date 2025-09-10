"use client";

import { DialogDelete } from "@/components/dashboard/transaksi/dialog/DialogDelete";
import { DataTable } from "@/components/dashboard/transaksi/table/DataTable";
import { Columns } from "@/components/dashboard/transaksi/table/Columns";
import React from "react";
import { useQueryTransaction } from "@/api/transaksi/queries";
import { useAtomValue } from "jotai";
import { profileAtom } from "@/store/profile";

const TransaksiAgen = () => {
  const { dataTransactions } = useQueryTransaction();
  const dataProfile = useAtomValue(profileAtom);

  const filteredData =
    dataTransactions?.filter((item) => {
      return (
        item.updatedByAgen?.role === "Agen" ||
        (item.updatedByAgen?.role === "Admin" &&
          item.statusUser !== "Failed" &&
          dataProfile?.role !== "Agen")
      );
    }) || [];

  return (
    <>
      <h2 className="text-title-md2 font-semibold text-black mb-5 dark:text-white">
        Transaksi Pengepul
      </h2>
      <DataTable columns={Columns} data={filteredData} />
      <DialogDelete />
    </>
  );
};

export default TransaksiAgen;
