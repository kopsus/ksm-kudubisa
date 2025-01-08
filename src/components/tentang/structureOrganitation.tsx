import structurOrganizationIMG from "@/assets/structureOrganization.png";
import Image from "next/image";

export const StructureOrganitation = () => {
  return (
    <div className="Container">
      <div className="rounded-3xl overflow-hidden lg:w-4/5 mx-auto">
        <p className="titleSection text-white bg-primary py-2 text-center">
          STRUKTUR OGRANISASI KSM KUDUBISA
        </p>
        <div className="h-full bg-white">
          <Image
            src={structurOrganizationIMG}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
};
