"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LoaderCircle } from "lucide-react";
import { EnumRole } from "../dashboard/user/AgenView";
import { dataRT, dataRW } from "@/data/user";
import { registerUserAction } from "@/lib/action/authAction";

export const FormRegister = () => {
  const router = useRouter();

  const [isPending, setIsPending] = useState(false);

  const [payload, setPayload] = useState({
    role: EnumRole.Masyarakat,
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    const result = await registerUserAction(payload);

    setIsPending(false);

    if (result.success) {
      alert(result.message);
      router.push(result.redirect || "/");
    } else {
      alert(result.message);
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
      <Button type="submit" disabled={isPending}>
        {isPending ? <LoaderCircle className="animate-spin" /> : "Daftar"}
      </Button>
      <p className="text-sm">
        Sudah Punya Akun?{" "}
        <Link href="/login" className="font-bold text-primary">
          Login
        </Link>
      </p>
    </form>
  );
};
