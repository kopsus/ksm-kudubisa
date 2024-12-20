import { Akun } from "@/components/profile/Akun";
import React from "react";
import highlightIMG from "@/assets/highlight_home.avif";
import { DataTable } from "@/components/profile/table/DataTable";
import { dataTransaksi } from "@/data/transaksi";
import { Columns } from "@/components/profile/table/Columns";

const page = () => {
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
            <DataTable columns={Columns} data={dataTransaksi} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
