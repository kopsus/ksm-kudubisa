"use client";

import { useMutationAuth } from "@/api/auth/mutation";
import { useQueryRoles } from "@/api/role/queries";
import { useMutationUser } from "@/api/users/mutations";
import { useQueryUsers } from "@/api/users/queries";
import { TypeUserBody } from "@/api/users/type";
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
import { dataRT, dataRW } from "@/data/user";
import { storeDialog } from "@/store/dialog";
import { useAtom } from "jotai";
import React from "react";

export const DialogCreate = () => {
  const [dialog, setDialog] = useAtom(storeDialog);
  const { dataRoles } = useQueryRoles();

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
  const { serviceAuth } = useMutationAuth();
  const { refetch } = useQueryUsers();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: TypeUserBody = {
      roleId: dialog.data?.roleId ?? "",
      username: dialog.data?.username ?? "",
      namaLengkap: dialog.data?.namaLengkap ?? "",
      noTlp: dialog.data?.noTlp ?? "",
      rt: dialog.data?.rt ?? "",
      rw: dialog.data?.rw ?? "",
      password: dialog.data?.password ?? "",
    };

    if (dialog.type === "CREATE") {
      const res = await serviceAuth({
        type: "register",
        body: payload,
      });
      if (res.status !== 400) {
        closeDialog();
        refetch();
      }
    } else {
      const res = await serviceUser({
        type: "update",
        body: payload,
        id: dialog.data?.id,
      });
      if (res.status !== 400) {
        closeDialog();
        refetch();
      }
      alert(res.message);
    }
  };

  return (
    <DialogLayout
      show={dialog.type !== "DELETE" && dialog.show}
      onHide={closeDialog}
      title={`${dialog.type === "CREATE" ? "Tambah User" : "Edit User"}`}
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
        <div className="grid grid-cols-4 items-center gap-4">
          <p>Role</p>
          <Select
            onValueChange={(value) => onValueChange(value, "roleId")}
            value={dialog.data?.roleId ?? ""}
          >
            <SelectTrigger className="w-full col-span-3">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              {dataRoles?.map((item, index) => (
                <SelectItem key={index} value={item.id ?? ""}>
                  {item.role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {dialog.type === "CREATE" && (
          <div className="grid grid-cols-4 items-center gap-4">
            <p>Password</p>
            <Input
              placeholder="Password"
              name="password"
              className="col-span-3"
              value={dialog.data?.password ?? ""}
              onChange={onInputChange}
              required
            />
          </div>
        )}
        <Button type="submit" className="mt-5">
          {dialog.type === "CREATE" ? "Tambah" : "Simpan Perubahan"}
        </Button>
      </form>
    </DialogLayout>
  );
};
