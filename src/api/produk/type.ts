import { StaticImageData } from "next/image";

type IProducts<T> = {
  data?: T | null;
};

type TypejenisSampah = "dipilah" | "belum";
type TypeProducts = {
  id: string;
  name: string;
  price: number;
  image: StaticImageData | string;
  jenis?: TypejenisSampah;
  quantity?: number;
};

export type { TypeProducts, IProducts, TypejenisSampah };
