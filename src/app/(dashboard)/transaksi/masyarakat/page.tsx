"use client";

import Breadcrumb from "@/components/dashboard/_global/Breadcrumb";
import { DialogCreate } from "@/components/dashboard/transaksi/dialog/DialogCreate";
import { DialogDelete } from "@/components/dashboard/transaksi/dialog/DialogDelete";
import { columns } from "@/components/dashboard/transaksi/table/Columns";
import { DataTable } from "@/components/dashboard/transaksi/table/DataTable";
import { dataRiwayat } from "@/data/riwayat";
import { storeDialog } from "@/store/dialog";
import { useSetAtom } from "jotai";
import React from "react";

const TransaksiMayarakat = () => {
  const setDialog = useSetAtom(storeDialog);
  return (
    <>
      <Breadcrumb
        pageName="Transaksi"
        onClick={() => {
          setDialog({
            type: "CREATE",
            show: true,
            data: null,
          });
        }}
      />
      <DataTable columns={columns} data={dataRiwayat} />
      <DialogDelete />
      <DialogCreate />
    </>
  );
};

export default TransaksiMayarakat;
