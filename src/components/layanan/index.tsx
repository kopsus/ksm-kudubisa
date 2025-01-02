import React from "react";
import { SampahSudahDipilah } from "./sampahSudahDipilah";
import { SampahBelumDipilah } from "./sampahBelumDipilah";
import { Cart } from "./cart";

const index = () => {
  return (
    <div className="Container grid md:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-10">
      <div className="col-span-1 lg:col-span-2 flex flex-col gap-10">
        <SampahSudahDipilah />
        <SampahBelumDipilah />
      </div>
      <div className="col-span-1 relative">
        <Cart />
      </div>
    </div>
  );
};

export default index;
