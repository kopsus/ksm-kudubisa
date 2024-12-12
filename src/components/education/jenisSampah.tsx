import { dataJenisSampah } from "@/data/jenisSampah";
import Image from "next/image";
import React from "react";

export const JenisSampah = () => {
  return (
    <div className="Container">
      <p className="titleSection text-center text-danger">
        JENIS - JENIS SAMPAH
      </p>
      {dataJenisSampah.map((item, index) => (
        <div key={index} className="grid grid-cols-3 gap-10 my-10">
          <div
            className={`${
              index % 2 === 1 && "order-2"
            } col-span-2 p-5 flex flex-col gap-2`}
          >
            <p className="titleContent">{item.title}</p>
            <p>{item.desc}</p>
            <ul className="list-disc pl-5 grid grid-cols-2 gap-2">
              {item.listSampah.map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 h-56 bg-white shadow-md border rounded-xl overflow-hidden">
            <Image src={item.image} alt="" width={0} height={0} sizes="100vw" />
          </div>
        </div>
      ))}
    </div>
  );
};
