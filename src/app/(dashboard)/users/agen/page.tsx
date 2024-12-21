"use client";

import Breadcrumb from "@/components/dashboard/_global/Breadcrumb";
import { DataTable } from "@/components/dashboard/user/table/DataTable";
import { Columns } from "@/components/dashboard/user/table/Columns";
import { dataUsers } from "@/data/user";
import { storeDialog } from "@/store/dialog";
import { useSetAtom } from "jotai";
import React from "react";
import { DialogDelete } from "@/components/dashboard/user/dialog/DialogDelete";
import { DialogCreate } from "@/components/dashboard/user/dialog/DialogCreate";

const UserAgen = () => {
  const setDialog = useSetAtom(storeDialog);
  const filterData = dataUsers.filter((user) => user.role.role_name === "AGEN");

  return (
    <>
      <Breadcrumb
        pageName="Agen"
        onClick={() => {
          setDialog({
            type: "CREATE",
            show: true,
            data: null,
          });
        }}
      />
      <DataTable columns={Columns} data={filterData} />
      <DialogDelete />
      <DialogCreate />
    </>
  );
};

export default UserAgen;
