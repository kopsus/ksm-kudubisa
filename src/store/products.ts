import { IProducts, TypeProducts } from "@/api/produk/type";
import { atom } from "jotai";

const storeProducts = atom<IProducts<TypeProducts[]>>({
  data: [],
});

export { storeProducts };
