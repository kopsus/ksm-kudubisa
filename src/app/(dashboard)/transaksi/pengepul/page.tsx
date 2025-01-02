"use client";

import { DialogDelete } from "@/components/dashboard/transaksi/dialog/DialogDelete";
import { DataTable } from "@/components/dashboard/transaksi/table/DataTable";
import { Columns } from "@/components/dashboard/transaksi/table/Columns";
import React from "react";
import { useQueryTransaction } from "@/api/transaksi/queries";
import { useQueryProfile } from "@/api/users/queries";

const TransaksiAgen = () => {
  const { dataTransactions } = useQueryTransaction();
  const { dataProfile } = useQueryProfile();

  const filteredData =
    dataTransactions?.filter((item) => {
      return (
        item.updatedByAgen?.role === "Agen" &&
        item.statusUser !== "Failed" &&
        dataProfile?.role.role !== "Agen"
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
