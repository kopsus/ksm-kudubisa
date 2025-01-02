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
    <div className="w-full md:w-75 lg:w-80 2xl:w-96 rounded-xl shadow-md shadow-black/25 bg-white border-2 border-primary overflow-hidden">
      <div className="h-52 overflow-hidden border">
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
      <div className="flex flex-col gap-5 items-center text-center md:w-1/2 mx-auto">
        <p className="titleSection text-danger">Pengolahan Sampah</p>
        <p>
          Serangkaian proses untuk menangani sampah dengan tujuan mengurangi
          dampak negatifnya terhadap lingkungan dan kesehatan.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 lg:gap-10 justify-center mt-10">
        <CardPengolahanSampah
          title="Reduce"
          desc="Mengurangi penggunaan sumber daya dan limbah, seperti mengurangi konsumsi kertas dan energi di kantor untuk menghemat hingga 20%."
          img={pengolahanSampahIMG}
        />
        <CardPengolahanSampah
          title="Reuse"
          desc="Menggunakan kembali barang atau bahan tanpa merubah bentuknya, seperti memakai amplop atau wadah penyimpanan kantor."
          img={pengolahanSampahIMG2}
        />
        <CardPengolahanSampah
          title="Recycle"
          desc="Mendaur ulang limbah menjadi produk baru, mengurangi kebutuhan bahan baku dan mengurangi limbah di TPA."
          img={pengolahanSampahIMG3}
        />
        <CardPengolahanSampah
          title="Repair"
          desc="Memperbaiki barang yang rusak daripada membuangnya, mengurangi limbah dan menghemat biaya."
          img={pengolahanSampahIMG5}
        />
        <CardPengolahanSampah
          title="Recovery"
          desc="Memulihkan energi atau material dari limbah, seperti komposting atau biomassa untuk menghasilkan energi."
          img={pengolahanSampahIMG4}
        />
      </div>
    </div>
  );
};
