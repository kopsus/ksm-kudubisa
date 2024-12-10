import React from "react";
import { SampahSudahDipilah } from "./sampahSudahDipilah";
import { SampahBelumDipilah } from "./sampahBelumDipilah";

const index = () => {
  return (
    <div className="Container grid grid-cols-3">
      <div className="col-span-2 flex flex-col gap-10">
        <SampahSudahDipilah />
        <SampahBelumDipilah />
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default index;
