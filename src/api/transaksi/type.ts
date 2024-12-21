import { TypejenisSampah, TypeProducts } from "../produk/type";

type TypeStatus = "Paid" | "Unpaid" | "Pending";

type TypeTransaksi = {
  id: string;
  name: string;
  rt: string;
  rw?: string;
  phone: string;
  barang: TypeProducts[];
  jenis?: TypejenisSampah;
  quantity?: number;
  status?: TypeStatus;
};

export type { TypeTransaksi };
