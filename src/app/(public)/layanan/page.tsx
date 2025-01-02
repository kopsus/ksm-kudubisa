import { Highlight } from "@/components/_global/highlight";
import Layanan from "@/components/layanan";
import React from "react";

const page = () => {
  return (
    <>
      <Highlight
        title="Hasilkan Pemasukan dengan Sampahmu!"
        textButton="Riwayat Penjualan"
        href="profile"
      />
      <Layanan />
    </>
  );
};

export default page;
