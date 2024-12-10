import Image, { StaticImageData } from "next/image";
import React from "react";
import pengolahanSampahIMG from "@/assets/pengolahan_sampah.png";
import pengolahanSampahIMG2 from "@/assets/pengolahan_sampah2.png";
import pengolahanSampahIMG3 from "@/assets/pengolahan_sampah3.png";
import pengolahanSampahIMG4 from "@/assets/pengolahan_sampah4.png";
import pengolahanSampahIMG5 from "@/assets/pengolahan_sampah5.png";

interface ICardPengolahanSampah {
  desc: string;
  img: StaticImageData;
  title: string;
}

const CardPengolahanSampah = ({ desc, img, title }: ICardPengolahanSampah) => {
  return (
    <div className="rounded-xl shadow-md shadow-black/25 bg-white border-2 border-primary overflow-hidden">
      <div className="w-72 h-52 overflow-hidden border">
        <Image
          src={img || ""}
          alt="services"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col gap-2 p-5 text-center">
        <p className="titleContent capitalize">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export const PengolahanSampah = () => {
  return (
    <div className="Container">
      <div className="flex flex-col gap-5 items-center text-center w-1/2 mx-auto">
        <p className="titleSection text-danger">Pengolahan Sampah</p>
        <p>
          Serangkaian proses untuk menangani sampah dengan tujuan mengurangi
          dampak negatifnya terhadap lingkungan dan kesehatan.
        </p>
      </div>
      <div className="flex gap-10 flex-wrap justify-center mt-10">
        <CardPengolahanSampah
          title="Reduce"
          desc="Pengurangan Sampah"
          img={pengolahanSampahIMG}
        />
        <CardPengolahanSampah
          title="Reuse"
          desc="Penggunaan Kembali"
          img={pengolahanSampahIMG2}
        />
        <CardPengolahanSampah
          title="Recycle"
          desc="Daur Ulang"
          img={pengolahanSampahIMG3}
        />
        <CardPengolahanSampah
          title="Recovery"
          desc="Pemanfaatan Kembali"
          img={pengolahanSampahIMG4}
        />
        <CardPengolahanSampah
          title="Disposal"
          desc="Pembuangan Akhir"
          img={pengolahanSampahIMG5}
        />
      </div>
    </div>
  );
};
