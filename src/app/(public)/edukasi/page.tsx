import { BahayaSampah } from "@/components/education/bahayaSampah";
import { JenisSampah } from "@/components/education/jenisSampah";
import { PengolahanSampah } from "@/components/education/pengolahanSampah";
import { Highlight } from "@/components/_global/highlight";
import React from "react";

const page = () => {
  return (
    <>
      <Highlight
        title="Apa yang anda ketahuin tentang jenis jenis sampah?"
        desc="Masih banyak orang yang belum mengetahuin mengenai jenjs-jenis Sampah. Sampah sendiri di golongkan  kedalam beberapa jenis berdasarkan sifat."
      />
      <JenisSampah />
      <BahayaSampah />
      <PengolahanSampah />
    </>
  );
};

export default page;
