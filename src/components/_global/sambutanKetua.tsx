import React from "react";
import ketuaIMG from "@/assets/ketua.png";
import Image from "next/image";

export const SambutanKetua = () => {
  return (
    <div className="Container">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch justify-stretch gap-10 lg:gap-20 rounded-xl shadow-md shadow-black/25 border bg-white overflow-hidden p-5 md:p-10">
        <div className="order-2 lg:order-1 lg:col-span-2 flex flex-col gap-4">
          <p className="titleContent">
            Selamat Datang di Kelompok Swadaya Masyarakat Kudi Bisa
          </p>
          <p>
            Assalamualaikum warahmatullahi wabarakatuh, Kami ucapkan selamat
            datang di website KSM Kudubisa, kelompok usaha masyarakat yang
            berdedikasi dalam pengelolaan sampah menjadi sesuatu yang lebih
            bernilai.
          </p>
          <p className="font-semibold">Mengapa Kami Hadir?</p>
          <p>
            Perkenalkan, saya Sukendar, Ketua KSM Kudubisa. Kami berdiri sejak
            tahun 2019 dengan tujuan untuk menjawab permasalahan sampah yang
            sering dikeluhkan oleh masyarakat Desa Sirau, terutama sampah
            plastik dan sampah rumah tangga yang berserakan. Melalui kolaborasi
            dan semangat gotong-royong warga desa, lahirlah KSM Kudubisa yang
            merupakan singkatan dari Kelompok Usaha Daur Ulang Barang Sisa.
          </p>
          <p>
            Kami percaya bahwa lingkungan yang bersih adalah kunci untuk hidup
            sehat. Oleh karena itu, mari bersama-sama menjaga kebersihan dan
            memanfaatkan sampah menjadi sesuatu yang lebih berharga. Selamat
            menjelajahi website kami, dan semoga informasi yang kami sajikan
            dapat bermanfaat. Terima kasih atas dukungan Anda.
          </p>
          <p>Wassalamualaikum warahmatullahi wabarakatuh.</p>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-1">
          <div className="w-1/2 md:w-1/3 lg:w-3/4 mx-auto">
            <Image src={ketuaIMG} alt="" width={0} height={0} sizes="100vw" />
          </div>
        </div>
      </div>
    </div>
  );
};
