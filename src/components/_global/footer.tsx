import React from "react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import communityIMG from "@/assets/community.avif";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className="relative bg-center bg-cover bg-no-repeat py-16"
      style={{ backgroundImage: `url(${communityIMG.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      <div className="relative w-11/12 md:w-10/12 mx-auto text-white">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <Logo />

          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
            Sampahmu Berharga — Tukarkan Menjadi Manfaat!
          </h2>
          <p className="italic text-neutral-300">
            Setiap tindakan kecil kita dapat menciptakan perubahan besar bagi
            lingkungan.
          </p>

          <Link href="/login">
            <Button variant="danger" size="lg" className="font-semibold px-10">
              GABUNG SEKARANG
            </Button>
          </Link>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Alamat</h3>

            <div className="flex items-start justify-center md:justify-start gap-3">
              <MapPin className="text-danger-500 text-xl mt-1" />
              <p className="text-neutral-300 leading-relaxed">
                Desa Sirau, Kecamatan Kemranjen
                <br />
                Kabupaten Banyumas, Jawa Tengah
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/10 mt-12 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-neutral-400 text-center gap-4">
          <p>Berkolaborasi dengan Dinas Lingkungan Hidup Kabupaten Banyumas</p>
          <p>© 2023 Kelompok Swadaya Masyarakat KMM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
