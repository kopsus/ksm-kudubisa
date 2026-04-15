"use client";

import React, { useState } from "react";
import { DataTable } from "./table/DataTable";
import { DialogCreate } from "./dialog/DialogCreate";
import { getColumnsUser } from "./table/Columns";
import Breadcrumb from "../_global/Breadcrumb";
import { TypeUser } from "@/api/users/type";
import { DialogDelete } from "./dialog/DialogDelete";

export enum EnumRole {
  Admin = "Admin",
  Agen = "Agen",
  Masyarakat = "Masyarakat",
  Pengepul = "Pengepul",
}

export interface DialogUserProps {
  dialog: DialogStateUser;
  setDialog: React.Dispatch<React.SetStateAction<DialogStateUser>>;
}

export type DialogStateUser = {
  type: "CREATE" | "UPDATE" | "DELETE" | null;
  show: boolean;
  data: TypeUser | null | any;
};

interface UserAgenViewProps {
  dataUsers: TypeUser[];
}

const UserAgenView = ({ dataUsers }: UserAgenViewProps) => {
  const [dialog, setDialog] = useState<DialogStateUser>({
    type: null,
    show: false,
    data: null,
  });

  const columns = getColumnsUser(setDialog);

  return (
    <>
      <Breadcrumb
        pageName="Agen"
        onClick={() => setDialog({ type: "CREATE", show: true, data: null })}
      />
      <DataTable columns={columns} data={dataUsers} />
      <DialogDelete dialog={dialog} setDialog={setDialog} />
      <DialogCreate dialog={dialog} setDialog={setDialog} />
    </>
  );
};

export default UserAgenView;
