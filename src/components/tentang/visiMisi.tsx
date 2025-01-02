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
              Menjadi pelopor dalam pengelolaan sampah berkelanjutan di [Nama
              Wilayah] menuju lingkungan yang bersih, sehat, dan mandiri.
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
            <p className="titleContent font-normal">
              Kami mengajak masyarakat untuk berperan aktif dalam menjaga
              kebersihan lingkungan melalui pengelolaan sampah yang baik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
