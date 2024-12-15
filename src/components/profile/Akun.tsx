import React from "react";
import { Card } from "../ui/card";

export const Akun = () => {
  return (
    <Card className="sticky top-20">
      <p className="titleSection mb-5">Akun Saya</p>
      <div className="grid grid-cols-3 gap-y-2">
        <p>Username</p>
        <p className="col-span-2">: Tegar</p>

        <p>Nama Lengkap</p>
        <p className="col-span-2">: Tegar Aji Kurniawan</p>

        <p>No Telepon</p>
        <p className="col-span-2">: 08123456789</p>

        <p>RT / RW</p>
        <p className="col-span-2">: 02 / 03</p>
      </div>
    </Card>
  );
};
