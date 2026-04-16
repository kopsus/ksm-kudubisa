import { EnumJenisSampah } from "@prisma/client";

type IProducts<T> = {
  data?: T | null;
};

type TypeProducts = {
  id?: string;
  product_name: string;
  price: number;
  image: string;
  jenis?: EnumJenisSampah;
  quantity?: number;
  created_at?: string;
  updated_at?: string;
};

export type { TypeProducts, IProducts };
