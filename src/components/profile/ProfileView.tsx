"use client";

import React, { useState } from "react";
import highlightIMG from "@/assets/highlight.jpg";
import { DataTable } from "@/components/profile/table/DataTable";
import { Columns } from "@/components/profile/table/Columns";
import { Akun } from "@/components/profile/Akun";
import { DialogEdit } from "@/components/profile/DialogEdit";

interface ProfileViewProps {
  profileData: any;
  transactionsData: any[];
}

const ProfileView = ({ profileData, transactionsData }: ProfileViewProps) => {
  // State untuk mengontrol modal Edit Profile
  const [dialog, setDialog] = useState({
    show: false,
    data: profileData, // Inisiasi awal dengan data profile
  });

  return (
    <div
      className="w-full relative bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${highlightIMG.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
      <div className="Container min-h-screen relative z-10 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
          <div className="col-span-1 relative">
            <Akun profileData={profileData} setDialog={setDialog} />
          </div>

          <div className="lg:col-span-2">
            <DataTable columns={Columns} data={transactionsData} />
          </div>
        </div>
      </div>

      <DialogEdit dialog={dialog} setDialog={setDialog} />
    </div>
  );
};

export default ProfileView;
