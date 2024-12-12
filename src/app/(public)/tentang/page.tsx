import { Highlight } from "@/components/_global/highlight";
import { SambutanKetua } from "@/components/_global/sambutanKetua";
import { StructureOrganitation } from "@/components/tentang/structureOrganitation";
import { VisiMisi } from "@/components/tentang/visiMisi";
import React from "react";

const page = () => {
  return (
    <>
      <Highlight
        title="Kenal Lebih dalam KSM MM"
        desc="sebanyak 31,13 juta ton sampah tertimbun di tahun 2021 dan sebanyak 19.45 juta ton sampah tertimbun di tahun 2022"
      />
      <SambutanKetua />
      <VisiMisi />
      <StructureOrganitation />
    </>
  );
};

export default page;
