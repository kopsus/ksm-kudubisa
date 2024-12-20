import { StaticImageData } from "next/image";
import { TypejenisSampah } from "../produk/type";

type IRiwayat<T> = {
  data?: T | null;
};

type TypeStatus = "Paid" | "Unpaid" | "Pending";

type TypeRiwayat = {
  id: string;
  name: string;
  rt: string;
  rw: string;
  phone: string;
  barang: string;
  price: number;
  image: StaticImageData | string;
  jenis?: TypejenisSampah;
  quantity?: number;
  status?: TypeStatus;
};

export type { TypeRiwayat, IRiwayat };
