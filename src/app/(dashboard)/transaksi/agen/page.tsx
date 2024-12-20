"use client";

import Breadcrumb from "@/components/dashboard/_global/Breadcrumb";
import { DialogCreate } from "@/components/dashboard/transaksi/dialog/DialogCreate";
import { DialogDelete } from "@/components/dashboard/transaksi/dialog/DialogDelete";
import { DataTable } from "@/components/dashboard/transaksi/table/DataTable";
import { ColumnsMasyarakat } from "@/components/dashboard/transaksi/table/ColumnsMasyarakat";
import { dataRiwayat } from "@/data/riwayat";
import { storeDialog } from "@/store/dialog";
import { useSetAtom } from "jotai";
import React from "react";

const TransaksiAgen = () => {
  const setDialog = useSetAtom(storeDialog);
  return (
    <>
      <Breadcrumb
        pageName="Transaksi Agen"
        onClick={() => {
          setDialog({
            type: "CREATE",
            show: true,
            data: null,
          });
        }}
      />
      <DataTable columns={ColumnsMasyarakat} data={dataRiwayat} />
      <DialogDelete />
      <DialogCreate />
    </>
  );
};

export default TransaksiAgen;
