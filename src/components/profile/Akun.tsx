import React from "react";
import { Card } from "../ui/card";
import { Edit } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const Akun = () => {
  return (
    <Card className="sticky top-20">
      <div className="flex justify-between">
        <p className="titleSection mb-5">Akun Saya</p>
        <Dialog>
          <DialogTrigger asChild>
            <Edit size={20} className="cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="max-w-[425px] rounded-xl">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Lakukan perubahan pada profil Anda di sini. Klik simpan setelah
                selesai.
              </DialogDescription>
            </DialogHeader>
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
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-3 gap-y-2 gap-x-5">
        <p>Username</p>
        <p className="col-span-2">: Tegar</p>

        <p className="text-nowrap">Nama Lengkap</p>
        <p className="col-span-2">: Tegar Setio</p>

        <p>No Telepon</p>
        <p className="col-span-2">: 08123456789</p>

        <p>RT / RW</p>
        <p className="col-span-2">: 02 / 03</p>
      </div>
    </Card>
  );
};
