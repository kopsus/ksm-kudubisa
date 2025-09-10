import { atom } from "jotai";
import { TypeUser } from "@/api/users/type";

export const profileAtom = atom<TypeUser | null>(null);
