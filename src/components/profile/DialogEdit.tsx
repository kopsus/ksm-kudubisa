"use client";

import React, { useState } from "react";
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
import { updateUser } from "@/lib/action/userAction";
import DialogLayout from "../dashboard/_global/Layouts/Dialog";
import { dataRT, dataRW } from "@/data/user";

interface DialogEditProps {
  dialog: {
    show: boolean;
    data: any;
  };
  setDialog: React.Dispatch<React.SetStateAction<any>>;
}

export const DialogEdit = ({ dialog, setDialog }: DialogEditProps) => {
  const [isPending, setIsPending] = useState(false);

  const closeDialog = () => {
    setDialog((prev: any) => ({
      ...prev,
      show: false,
    }));
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setDialog((prev: any) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
    }));
  };

  const onValueChange = (value: string, name: string) => {
    setDialog((prev: any) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true); // Mulai loading

    const payload = {
      username: dialog.data?.username ?? "",
      namaLengkap: dialog.data?.namaLengkap ?? "",
      noTlp: dialog.data?.noTlp ?? "",
      rt: dialog.data?.rt ?? "",
      rw: dialog.data?.rw ?? "",
      ...(dialog.data?.password && { password: dialog.data.password }),
    };

    // Panggil Server Action
    const res = await updateUser(dialog.data?.id, payload);

    setIsPending(false); // Selesai loading

    if (res.success) {
      alert("Profil berhasil diperbarui!");
      closeDialog();
      // Halaman akan otomatis memuat data baru karena revalidatePath di action
    } else {
      alert(res.message); // Tampilkan pesan error (misal: format password salah)
    }
  };

  return (
    <DialogLayout
      show={dialog.show}
      onHide={closeDialog}
      title="Edit Profil"
      desc="Lakukan perubahan pada profil Anda di sini. Klik simpan setelah selesai."
    >
      <form onSubmit={handleSubmit} className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <p>Username</p>
          <Input
            placeholder="Username"
            name="username"
            className="col-span-3"
            value={dialog.data?.username ?? ""}
            onChange={onInputChange}
            required
            disabled // Biasanya username tidak disarankan untuk diubah bebas
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <p>Nama Lengkap</p>
          <Input
            placeholder="Nama Lengkap"
            name="namaLengkap"
            className="col-span-3"
            value={dialog.data?.namaLengkap ?? ""}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <p>No Telephone</p>
          <Input
            placeholder="No Telephone"
            type="number"
            name="noTlp"
            className="col-span-3"
            value={dialog.data?.noTlp ?? ""}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <p>RT / RW</p>
          <div className="flex gap-5 justify-between col-span-3">
            <Select
              onValueChange={(value) => onValueChange(value, "rt")}
              value={dialog.data?.rt ?? ""}
            >
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
            <Select
              onValueChange={(value) => onValueChange(value, "rw")}
              value={dialog.data?.rw ?? ""}
            >
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
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <p>Password</p>
          <Input
            placeholder="Biarkan kosong jika tidak diubah"
            type="password" // Ubah jadi password agar aman
            name="password"
            className="col-span-3"
            value={dialog.data?.password ?? ""}
            onChange={onInputChange}
          />
        </div>
        <div className="flex justify-end mt-5">
          <Button type="submit" disabled={isPending}>
            {isPending ? <LoaderCircle className="animate-spin mr-2" /> : null}
            {isPending ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </div>
      </form>
    </DialogLayout>
  );
};
