import { Highlight } from "@/components/_global/highlight";
import { SambutanKetua } from "@/components/_global/sambutanKetua";
import { StructureOrganitation } from "@/components/tentang/structureOrganitation";
import { VisiMisi } from "@/components/tentang/visiMisi";
import React from "react";

const page = () => {
  return (
    <>
      <Highlight
        title="Kenal Lebih dalam KSM Kudu bisa"
        desc="Kelompok Usaha Daur Ulang Barang Sisa"
      />
      <SambutanKetua />
      <VisiMisi />
      <StructureOrganitation />
    </>
  );
};

export default page;
