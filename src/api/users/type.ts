import { TypeTransaksi } from "@/api/transaksi/type";
import { EnumRole } from "@prisma/client";

type TypeUser = {
  id: string;
  role: EnumRole;
  username: string;
  namaLengkap: string;
  noTlp: string;
  rt: string;
  rw: string;
  created_at?: string;
  updated_at?: string;
  transaksi?: TypeTransaksi[];
};

type TypeUserBody = {
  username: string;
  namaLengkap: string;
  noTlp: string;
  rt: string;
  rw: string;
  password?: string;
};

export type { TypeUser, TypeUserBody };
