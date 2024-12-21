"use client";

import DialogLayout from "@/components/dashboard/_global/Layouts/Dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { storeDialog } from "@/store/dialog";
import { useAtom } from "jotai";
import React from "react";

export const DialogCreate = () => {
  const [dialog, setDialog] = useAtom(storeDialog);

  const closeDialog = () => {
    setDialog((prev) => ({
      ...prev,
      show: false,
    }));
  };

  return (
    <DialogLayout
      show={dialog.type !== "DELETE" && dialog.show}
      onHide={closeDialog}
      title={`${dialog.type === "CREATE" ? "Tambah User" : "Edit User"}`}
    >
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <p className="">Username</p>
          <Input placeholder="Username" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <p className="">Nama Lengkap</p>
          <Input placeholder="Nama Lengkap" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <p className="">No Telephone</p>
          <Input placeholder="No Telephone" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <p className="">RT / RW</p>
          <div className="flex gap-5 justify-between">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="RT" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="RW" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <p className="">Role</p>
          <Select>
            <SelectTrigger className="w-full col-span-3">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Masyarakat</SelectItem>
              <SelectItem value="2">Agen</SelectItem>
              <SelectItem value="3">Pengepul</SelectItem>
              <SelectItem value="4">Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button type="submit">
        {dialog.type === "CREATE" ? "Tambah" : "Simpan Perubahan"}
      </Button>
    </DialogLayout>
  );
};
