"use client";

import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { profileAtom } from "@/store/profile";
import { TypeUser } from "@/api/users/type";

// Komponen ini tidak akan merender apa pun, tugasnya hanya inisialisasi
export function JotaiProviderInitializer({
  profile,
}: {
  profile: TypeUser | null;
}) {
  const setProfile = useSetAtom(profileAtom);

  // Gunakan useEffect untuk memastikan ini hanya berjalan sekali di client
  useEffect(() => {
    setProfile(profile);
  }, [profile, setProfile]);

  return null; // Tidak perlu render UI
}
