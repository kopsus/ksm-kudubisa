import Image, { StaticImageData } from "next/image";
import React from "react";
import pedulSampahIMG from "@/assets/peduli_sampah.jpg";
import pedulSampahIMG2 from "@/assets/peduli_sampah2.jpg";
import pedulSampahIMG3 from "@/assets/peduli_sampah3.jpg";
import pedulSampahIMG4 from "@/assets/peduli_sampah4.jpg";

interface ICardPeduliSampah {
  img: StaticImageData | string;
  title: string;
  desc: string;
}

const CardPeduliSampah = ({ desc, img, title }: ICardPeduliSampah) => {
  return (
    <div className="rounded-xl shadow-md shadow-black/25 bg-white overflow-hidden">
      <div className="w-full h-52 overflow-hidden border">
        <Image
          src={img || ""}
          alt="services"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <p className="titleContent capitalize">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export const PeduliSampah = () => {
  return (
    <div className="Container">
      <p className="titleSection">Kenapa Harus Peduli Sampah?</p>
      <div className="grid grid-cols-4 gap-5 mt-5">
        <CardPeduliSampah
          img={pedulSampahIMG}
          title="Lingkungan"
          desc="Sampah yang terkelola dengan baik menciptakan lingkungan yang bersih, aman, dan nyaman untuk ditinggali."
        />
        <CardPeduliSampah
          img={pedulSampahIMG2}
          title="kesehatan"
          desc="Sampah yang terkelola dengan baik menciptakan lingkungan yang bersih, aman, dan nyaman untuk ditinggali."
        />
        <CardPeduliSampah
          img={pedulSampahIMG3}
          title="Ekonomi"
          desc="Sampah yang terkelola dengan baik menciptakan lingkungan yang bersih, aman, dan nyaman untuk ditinggali."
        />
        <CardPeduliSampah
          img={pedulSampahIMG4}
          title="Kualitas hidup"
          desc="Sampah yang terkelola dengan baik menciptakan lingkungan yang bersih, aman, dan nyaman untuk ditinggali."
        />
      </div>
    </div>
  );
};
