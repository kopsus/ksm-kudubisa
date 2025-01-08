import visiIMG from "@/assets/visi.jpg";
import misiIMG from "@/assets/misi.jpg";

export const VisiMisi = () => {
  return (
    <div className="Container">
      <div className="grid md:grid-cols-2 justify-center gap-10 lg:w-10/12 mx-auto">
        <div
          className="relative bg-center bg-no-repeat h-96 md:h-[443px] lg:h-[553px] bg-cover rounded-xl overflow-hidden"
          style={{ backgroundImage: `url(${visiIMG.src})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
          <div className="relative w-full h-full flex flex-col gap-2 justify-end p-5 lg:p-10 text-white">
            <p className="titleSection">VISI</p>
            <p className="titleContent font-normal">
              Mewujudkan Desa Sirau yang bersih, sehat, dan lestari melalui
              pengelolaan sampah berbasis masyarakat website yang kreatif,
              inovatif, dan berkelanjutan.
            </p>
          </div>
        </div>
        <div
          className="relative bg-center bg-no-repeat h-96 md:h-[443px] lg:h-[553px] bg-cover rounded-xl overflow-hidden"
          style={{ backgroundImage: `url(${misiIMG.src})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
          <div className="relative w-full h-full flex flex-col gap-2 justify-end p-5 lg:p-10 text-white">
            <p className="titleSection">MISI</p>
            <ul className="list-disc pl-5">
              <li>Meningkatkan Kesadaran Masyarakat</li>
              <li>Mengembangkan Sistem Pengelolaan Sampah</li>
              <li>Mendorong Pemanfaatan Sampah</li>
              <li>Memperkuat Kolaborasi dan Kemitraan</li>
              <li>Menciptakan Peluang Ekonomi Baru</li>
              <li>Menjaga Keberlanjutan Lingkungan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
