"use client";

import { useMutationAuth } from "@/api/auth/mutation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { roleId } from "@/constants/variables";
import { dataRT, dataRW } from "@/data/user";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const FormRegister = () => {
  const router = useRouter();
  const [payload, setPayload] = React.useState({
    roleId: "1",
    username: "",
    namaLengkap: "",
    noTlp: "",
    rt: "",
    rw: "",
    password: "",
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onValueChange = (value: string, name: string) => {
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { serviceAuth, isPending } = useMutationAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await serviceAuth({
      type: "register",
      body: payload,
    });
    if (res.message === "Created") {
      router.push("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Input
        placeholder="Username"
        name="username"
        onChange={onInputChange}
        required
      />
      <Input
        placeholder="Nama Lengkap"
        name="namaLengkap"
        onChange={onInputChange}
        required
      />
      <Input
        placeholder="No Telephone"
        type="number"
        name="noTlp"
        onChange={onInputChange}
        required
      />
      <div className="flex gap-5 justify-between">
        <Select onValueChange={(value) => onValueChange(value, "rt")} required>
          <SelectTrigger>
            <SelectValue placeholder="RT" />
          </SelectTrigger>
          <SelectContent>
            {dataRT.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => onValueChange(value, "rw")} required>
          <SelectTrigger>
            <SelectValue placeholder="RW" />
          </SelectTrigger>
          <SelectContent>
            {dataRW.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Input
        placeholder="Kata Sandi"
        name="password"
        type="password"
        onChange={onInputChange}
        required
      />
      <div className="flex items-start gap-2 my-3">
        <input type="checkbox" required />
        <p className="text-xs text-black/70">
          Saya menyatakan bahwa sampah yang akan saya jual adalah milik saya
          sendiri dan diperoleh secara legal.
        </p>
      </div>
      <Button type="submit">{isPending ? <LoaderCircle /> : "Daftar"}</Button>
      <p className="text-sm">
        Sudah Punya Akun?{" "}
        <Link href="/login" className="font-bold text-primary">
          Login
        </Link>
      </p>
    </form>
  );
};
