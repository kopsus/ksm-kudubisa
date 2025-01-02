import { dataJenisSampah } from "@/data/jenisSampah";
import Image from "next/image";
import React from "react";

export const JenisSampah = () => {
  return (
    <div className="Container">
      <p className="titleSection text-center text-danger">
        JENIS - JENIS SAMPAH
      </p>
      <div className="lg:ContainerX">
        {dataJenisSampah.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-5 lg:gap-10 my-10"
          >
            <div className="md:order-1 h-60 md:h-40 lg:h-56 shadow-md border rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div
              className={`${
                index % 2 === 1 && "md:order-2"
              } col-span-2 flex flex-col gap-2`}
            >
              <p className="titleContent">{item.title}</p>
              <p>{item.desc}</p>
              <ul className="list-disc pl-5 grid md:grid-cols-2">
                {item.listSampah.map((item, index) => (
                  <li key={index} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
