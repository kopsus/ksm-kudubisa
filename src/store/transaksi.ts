import { IProducts } from "@/api/produk/type";
import { TypeTransaksi } from "@/api/transaksi/type";
import { atom } from "jotai";

const storeTransaksi = atom<IProducts<TypeTransaksi>>({
  data: null,
});

export { storeTransaksi };
