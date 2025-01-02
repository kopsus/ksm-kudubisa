import { TypeTransaksi } from "@/api/transaksi/type";
import { TypeRole } from "../role/types";

type TypeUser = {
  id: string;
  roleId: string;
  role: TypeRole;
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
  roleId?: string;
  username: string;
  namaLengkap: string;
  noTlp: string;
  rt: string;
  rw: string;
  password?: string;
};

export type { TypeUser, TypeUserBody };
