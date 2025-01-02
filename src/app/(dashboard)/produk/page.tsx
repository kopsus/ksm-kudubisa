"use client";

import React from "react";
import Breadcrumb from "@/components/dashboard/_global/Breadcrumb";
import { DataTable } from "@/components/dashboard/produk/table/DataTable";
import { columns } from "@/components/dashboard/produk/table/Columns";
import { DialogDelete } from "@/components/dashboard/produk/dialog/DialogDelete";
import { useSetAtom } from "jotai";
import { storeDialog } from "@/store/dialog";
import { useQueryProducts } from "@/api/produk/queries";
import { DialogCreate } from "@/components/dashboard/produk/dialog/DialogCreate";

const Product = () => {
  const setDialog = useSetAtom(storeDialog);
  const { dataProduct, isLoading } = useQueryProducts();

  if (isLoading) {
    return <p>LOADING....</p>;
  }

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
      <DataTable columns={columns} data={dataProduct ?? []} />
      <DialogDelete />
      <DialogCreate />
    </>
  );
};

export default Product;
