import { IProducts, TypeProducts } from "@/api/products";
import { atom } from "jotai";

const storeProducts = atom<IProducts<TypeProducts[]>>({
  data: [],
});

export { storeProducts };
