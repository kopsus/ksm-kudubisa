"use client";

import { Akun } from "@/components/profile/Akun";
import React from "react";
import highlightIMG from "@/assets/highlight.jpg";
import { DataTable } from "@/components/profile/table/DataTable";
import { Columns } from "@/components/profile/table/Columns";
import { DialogEdit } from "@/components/profile/DialogEdit";
import { useQueryTransaction } from "@/api/transaksi/queries";

const Profile = () => {
  const { dataTransactions } = useQueryTransaction();

  return (
    <div
      className="w-full relative bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${highlightIMG.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
      <div className="Container min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 relative">
          <div className="col-span-1 relative">
            <Akun />
          </div>

          <div className="lg:col-span-2">
            <DataTable columns={Columns} data={dataTransactions || []} />
          </div>
        </div>
      </div>
      <DialogEdit />
    </div>
  );
};

export default Profile;
