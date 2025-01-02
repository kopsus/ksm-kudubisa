type IProducts<T> = {
  data?: T | null;
};

type TypejenisSampah = {
  id?: string;
  jenisSampah: "SudahDiPilah" | "BelumDiPilah";
};
type TypeProducts = {
  id?: string;
  product_name: string;
  price: number;
  image: string;
  jenisId?: string;
  jenis?: TypejenisSampah;
  quantity?: number;
  created_at?: string;
  updated_at?: string;
};

export type { TypeProducts, IProducts, TypejenisSampah };
