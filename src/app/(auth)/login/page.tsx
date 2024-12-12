import highlightIMG from "@/assets/highlight_home.avif";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const page = () => {
  return (
    <div
      className="w-full relative bg-center bg-no-repeat bg-cover h-screen max-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${highlightIMG.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
      <div className="relative bg-white shadow-md rounded-3xl w-96 flex flex-col gap-8 py-5 px-10 text-center">
        <p className="titleSection">Selamat Datang Di KSM KMM Banyumas</p>
        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do”</p>
        <div className="w-full flex flex-col gap-3">
          <Input placeholder="Username" />
          <Input placeholder="Password" type="password" />
          <Button>Masuk</Button>
        </div>
        <p>
          Belum punya akun?{" "}
          <Link href={"/register"} className="text-primary font-bold">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
