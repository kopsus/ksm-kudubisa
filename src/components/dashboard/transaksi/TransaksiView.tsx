"use client";

import React, { useState } from "react";
import { DataTable } from "./table/DataTable";
import { getColumnsTransaction } from "./table/Columns";
import { DialogDeleteTransaction } from "./dialog/DialogDelete";

export interface DialogProps {
  dialog: DialogStateTransaksi;
  setDialog: React.Dispatch<React.SetStateAction<DialogStateTransaksi>>;
}

export type DialogStateTransaksi = {
  type: "CREATE" | "UPDATE" | "DELETE" | null;
  show: boolean;
  data: any | null;
};

interface TransaksiViewProps {
  dataTransactions: any[];
  userRole: string;
}

const TransaksiView = ({ dataTransactions, userRole }: TransaksiViewProps) => {
  // Ganti Jotai storeDialog dengan useState lokal
  const [dialog, setDialog] = useState<DialogStateTransaksi>({
    type: null,
    show: false,
    data: null,
  });

  // Lempar setDialog ke fungsi pembuat kolom (seperti di Product & User)
  const columns = getColumnsTransaction(setDialog, userRole);

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Transaksi Agen
        </h2>
      </div>

      {/* Langsung masukkan data tanpa perlu difilter lagi */}
      <DataTable columns={columns} data={dataTransactions} />

      <DialogDeleteTransaction dialog={dialog} setDialog={setDialog} />
    </>
  );
};

export default TransaksiView;
