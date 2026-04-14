"use client";

import React, { useState } from "react";
import Breadcrumb from "../_global/Breadcrumb";
import { DataTable } from "./table/DataTable";
import { TypeProducts } from "@/api/produk/type";
import { getColumns } from "./table/Columns";
import { DialogCreate } from "./dialog/DialogCreate";
import { DialogDelete } from "./dialog/DialogDelete";

export enum EnumJenisSampah {
  BelumDiPilah = "BelumDiPilah",
  SudahDiPilah = "SudahDiPilah",
}

export type DialogState = {
  type: "CREATE" | "UPDATE" | "DELETE" | null;
  show: boolean;
  data: TypeProducts | null | any;
};

interface ProductViewProps {
  dataProduct: TypeProducts[];
}

const ProductView = ({ dataProduct }: ProductViewProps) => {
  const [dialog, setDialog] = useState<DialogState>({
    type: null,
    show: false,
    data: null,
  });

  const columns = getColumns(setDialog);

  return (
    <>
      <Breadcrumb
        pageName="Produk"
        onClick={() => {
          setDialog({ type: "CREATE", show: true, data: null });
        }}
      />

      <DataTable columns={columns} data={dataProduct ?? []} />

      <DialogDelete dialog={dialog} setDialog={setDialog} />
      <DialogCreate dialog={dialog} setDialog={setDialog} />
    </>
  );
};

export default ProductView;
