"use client";

import React from "react";
import Breadcrumb from "@/components/dashboard/_global/Breadcrumb";
import { DataTable } from "@/components/dashboard/produk/table/DataTable";
import { dataProducts } from "@/data/product";
import { columns } from "@/components/dashboard/produk/table/Columns";
import { DialogDelete } from "@/components/dashboard/produk/dialog/DialogDelete";
import { DialogCreate } from "@/components/dashboard/produk/dialog/DialogCreate";
import { useSetAtom } from "jotai";
import { storeDialog } from "@/store/dialog";

const Product = () => {
  const setDialog = useSetAtom(storeDialog);

  return (
    <>
      <Breadcrumb
        pageName="Produk"
        onClick={() => {
          setDialog({
            type: "CREATE",
            show: true,
            data: null,
          });
        }}
      />
      <DataTable columns={columns} data={dataProducts} />
      <DialogDelete />
      <DialogCreate />
    </>
  );
};

export default Product;
