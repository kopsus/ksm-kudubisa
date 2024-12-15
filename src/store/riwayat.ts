import { IRiwayat, TypeRiwayat } from "@/api/riwayat/type";
import { atom } from "jotai";

const storeRiwayat = atom<IRiwayat<TypeRiwayat[]>>({
  data: [],
});

export { storeRiwayat };
