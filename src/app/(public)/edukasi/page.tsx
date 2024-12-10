import { BahayaSampah } from "@/components/education/bahayaSampah";
import { JenisSampah } from "@/components/education/jenisSampah";
import { PengelolaSampah } from "@/components/education/pengelolaSampah";
import { Highlight } from "@/components/highlight";
import React from "react";

const page = () => {
  return (
    <div>
      <Highlight
        title="Apa yang anda ketahuin tentang jenis jenis sampah?"
        desc="Masih banyak orang yang belum mengetahuin mengenai jenjs-jenis Sampah. Sampah sendiri di golongkan  kedalam beberapa jenis berdasarkan sifat."
      />
      <JenisSampah />
      <BahayaSampah />
      <PengelolaSampah />
    </div>
  );
};

export default page;
