"use client";

import { formatIDR } from "@/lib/formated";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface ICardSampah {
  id: string;
  img: string | StaticImageData;
  name: string;
  price: number;
}

interface Counts {
  [id: string]: number;
}

export const CardSampah = ({ id, img, name, price }: ICardSampah) => {
  const [counts, setCounts] = React.useState<Counts>({});

  const handlePlus = (id: string) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const handleMin = (id: string) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 0) - 1, 0),
    }));
  };

  return (
    <div className="grid grid-cols-2 items-start justify-start gap-5">
      <div className="rounded-xl overflow-hidden shadow-md border w-full h-32">
        <Image src={img} alt={name} width={0} height={0} sizes="100vw" />
      </div>
      <div className="flex flex-col gap-2">
        <p>{name}</p>
        <p className="titleContent text-danger">{formatIDR(price)} / kg</p>
        <div className="flex items-center gap-2">
          <Button
            size={"sm"}
            onClick={() => handleMin(id)}
            className="bg-primary"
          >
            -
          </Button>
          <Button variant={"outline"} disabled>
            {counts[id] || 0}
          </Button>
          <Button
            size={"sm"}
            onClick={() => handlePlus(id)}
            className="bg-primary"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
