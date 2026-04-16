"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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

interface UserViewProps {
  dataUsers: TypeUser[];
}

// Daftar role untuk di-map menjadi tabs
const roles = ["Semua", "Admin", "Agen", "Masyarakat", "Pengepul"];

const UserView = ({ dataUsers }: UserViewProps) => {
  const [dialog, setDialog] = useState<DialogStateUser>({
    type: null,
    show: false,
    data: null,
  });

  const columns = getColumnsUser(setDialog);

  // Ambil parameter URL saat ini (misal: ?role=Agen)
  const searchParams = useSearchParams();
  const activeRole = searchParams.get("role") || "Semua";

  return (
    <>
      {/* Ubah pageName menjadi dinamis agar menyesuaikan tab yang diklik */}
      <Breadcrumb
        pageName={`Data User ${activeRole !== "Semua" ? activeRole : ""}`}
        onClick={() => setDialog({ type: "CREATE", show: true, data: null })}
      />

      {/* TABS SECTION */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {roles.map((role) => {
          // Jika tab "Semua" diklik, hapus parameter role dari URL
          const href = role === "Semua" ? "/users" : `/users?role=${role}`;
          const isActive = activeRole === role;

          return (
            <Link
              key={role}
              href={href}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700"
              }`}
            >
              {role}
            </Link>
          );
        })}
      </div>

      <DataTable columns={columns} data={dataUsers} />
      <DialogDelete dialog={dialog} setDialog={setDialog} />
      <DialogCreate dialog={dialog} setDialog={setDialog} />
    </>
  );
};

export default UserView;
