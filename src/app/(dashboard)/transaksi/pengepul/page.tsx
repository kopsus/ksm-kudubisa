"use client";

import { DialogDelete } from "@/components/dashboard/transaksi/dialog/DialogDelete";
import { DataTable } from "@/components/dashboard/transaksi/table/DataTable";
import { Columns } from "@/components/dashboard/transaksi/table/Columns";
import React from "react";
import { useQueryTransaction } from "@/api/transaksi/queries";

const TransaksiAgen = () => {
  const { dataTransactions } = useQueryTransaction();

  return (
    <>
      <h2 className="text-title-md2 font-semibold text-black mb-5 dark:text-white">
        Transaksi Pengepul
      </h2>
      <DataTable columns={Columns} data={dataTransactions ?? []} />
      <DialogDelete />
    </>
  );
};

export default TransaksiAgen;
