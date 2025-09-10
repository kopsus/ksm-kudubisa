"use client";

import Breadcrumb from "@/components/dashboard/_global/Breadcrumb";
import { DataTable } from "@/components/dashboard/user/table/DataTable";
import { Columns } from "@/components/dashboard/user/table/Columns";
import { storeDialog } from "@/store/dialog";
import { useSetAtom } from "jotai";
import React from "react";
import { DialogDelete } from "@/components/dashboard/user/dialog/DialogDelete";
import { DialogCreate } from "@/components/dashboard/user/dialog/DialogCreate";
import { useQueryUsers } from "@/api/users/queries";

const UserMasyarakat = () => {
  const setDialog = useSetAtom(storeDialog);
  const { dataUsers } = useQueryUsers();
  const filteredData =
    dataUsers?.filter((item) => item.role === "Masyarakat") || [];
  return (
    <>
      <Breadcrumb
        pageName="Masyarakat"
        onClick={() => {
          setDialog({
            type: "CREATE",
            show: true,
            data: null,
          });
        }}
      />
      <DataTable columns={Columns} data={filteredData} />
      <DialogDelete />
      <DialogCreate />
    </>
  );
};

export default UserMasyarakat;
