import Image, { StaticImageData } from "next/image";
import React from "react";
import bahayaSampahIMG from "@/assets/peduli_sampah.jpg";
import bahayaSampahIMG2 from "@/assets/peduli_sampah2.jpg";
import bahayaSampahIMG3 from "@/assets/peduli_sampah3.jpg";

interface ICardBahayaSampah {
  img: StaticImageData | string;
  title: string;
  desc: string;
}

const CardBahayaSampah = ({ desc, img, title }: ICardBahayaSampah) => {
  return (
    <div className="rounded-xl shadow-md shadow-black/25 bg-white overflow-hidden">
      <div className="w-full h-64 overflow-hidden border">
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

export const BahayaSampah = () => {
  return (
    <div className="Container bg-[#E2FFFB]/50">
      <div className="flex flex-col gap-5 items-center text-center md:w-2/3 mx-auto">
        <p className="titleSection text-danger">Bahaya Sampah</p>
        <p>
          Pemilahan sampah adalah langkah awal yang krusial dalam mengurangi
          bahaya sampah. Tanggung jawab bersama untuk memilah sampah dengan
          benar membantu mencegah dampak negatif sampah terhadap kesehatan,
          lingkungan, dan ekonomi kita.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <CardBahayaSampah
          img={bahayaSampahIMG2}
          title="Kesehatan"
          desc="Sampah mengancam kesehatan manusia. Tempat pembuangan yang tidak bersih memicu penyakit menular, sementara partikel dari sampah mencemari udara dan air, menyebabkan gangguan pernapasan dan pencernaan."
        />
        <CardBahayaSampah
          img={bahayaSampahIMG}
          title="Lingkungan"
          desc="Sampah menjadi ancaman serius bagi lingkungan, membutuhkan ratusan tahun untuk terurai. Limbah ini mencemari lautan, merusak ekosistem, mengancam satwa laut, serta memicu banjir, longsor, dan kerusakan infrastruktur."
        />
        <CardBahayaSampah
          img={bahayaSampahIMG3}
          title="Ekonomi"
          desc="Pengelolaan sampah yang buruk menyebabkan kerugian ekonomi, seperti tingginya biaya pengelolaan dan dampak pencemaran yang menurunkan nilai properti, daya tarik wisata, serta potensi perikanan."
        />
      </div>
    </div>
  );
};
