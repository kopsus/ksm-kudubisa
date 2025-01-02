import {
  Dialog,
  DialogClose,
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
import { useAtom } from "jotai";
import { storeDialog } from "@/store/dialog";
import { TypeUserBody } from "@/api/users/type";
import React from "react";
import { useMutationUser } from "@/api/users/mutations";
import { dataRT, dataRW } from "@/data/user";
import DialogLayout from "../dashboard/_global/Layouts/Dialog";

export const DialogEdit = () => {
  const [dialog, setDialog] = useAtom(storeDialog);

  const closeDialog = () => {
    setDialog((prev) => ({
      ...prev,
      show: false,
    }));
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setDialog((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
    }));
  };

  const onValueChange = (value: string, name: string) => {
    setDialog((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
    }));
  };

  const { serviceUser } = useMutationUser();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: TypeUserBody = {
      roleId: dialog.data?.roleId ?? "",
      username: dialog.data?.username ?? "",
      namaLengkap: dialog.data?.namaLengkap ?? "",
      noTlp: dialog.data?.noTlp ?? "",
      rt: dialog.data?.rt ?? "",
      rw: dialog.data?.rw ?? "",
    };

    await serviceUser({
      type: "update",
      body: payload,
      id: dialog.data?.id,
    });

    closeDialog();
  };

  return (
    <DialogLayout
      show={dialog.type !== "DELETE" && dialog.show}
      onHide={closeDialog}
      title={`${dialog.type === "CREATE" ? "Tambah User" : "Edit User"}`}
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
          <div className="flex gap-5 justify-between">
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
        <div className="flex justify-end mt-5">
          <Button type="submit">Simpan Perubahan</Button>
        </div>
      </form>
    </DialogLayout>
  );
};
