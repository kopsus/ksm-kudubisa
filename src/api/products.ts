import { StaticImageData } from "next/image";

type IProducts<T> = {
  data?: T | null;
};

type jenisSampah = "dipilah" | "belum";
type TypeProducts = {
  id: string;
  name: string;
  price: number;
  image: string | StaticImageData;
  jenis?: jenisSampah;
  quantity?: number;
};

export type { TypeProducts, IProducts };
