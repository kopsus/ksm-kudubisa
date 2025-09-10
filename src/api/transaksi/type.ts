import { EnumRole } from "@prisma/client";
import { TypeProducts } from "../produk/type";
import { TypeUser } from "../users/type";

type TypeStatus = "Pending" | "Process" | "Paid" | "Failed";

type TypeUpdatedByAgen = {
  id?: string;
  role: EnumRole;
};

type TypeupdatedByPengepul = {
  id?: string;
  role: EnumRole;
};

type TypeTransaksiProduk = {
  id: string;
  transaksiId: string;
  produkId: string;
  quantity: number;
  created_at?: string;
  updated_at?: string;
  produk: TypeProducts;
};

type TypeTransaksi = {
  id: string;
  userId: string;
  statusUser: TypeStatus;
  statusAgen: TypeStatus;
  user: TypeUser;
  updatedByRoleAgen?: string;
  updatedByRolePengepul?: TypeupdatedByPengepul;
  updatedByAgen?: TypeUpdatedByAgen;
  updatedByPengepul?: TypeupdatedByPengepul;
  createdAt?: string;
  updatedAt?: string;
  TransaksiProduk: TypeTransaksiProduk[];
};

type TypeTransaksiBody = {
  userId?: string;
  statusUser?: string;
  statusAgen?: string;
  updatedByRoleAgen?: string;
  updatedByRolePengepul?: string;
  produk?: { produkId: string; quantity: number }[];
  TransaksiProduk?: { produkId: string; quantity: number }[];
};

export type { TypeTransaksi, TypeTransaksiProduk, TypeTransaksiBody };
