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
      title={`${dialog.type === "CREATE" ? "Tambah Produk" : "Edit Produk"}`}
    >
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <p className="">Name</p>
          <Input placeholder="Name" className="col-span-3" />
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
          <p className="">No Telephone</p>
          <Input
            placeholder="No Telephone"
            type="number"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <p className="">Brang</p>
          <Input placeholder="Brang" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <p className="">Quantity</p>
          <Input placeholder="Quantity" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <p className="">Status</p>
          <div className="col-span-3">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1" className="text-primary">
                  Paid
                </SelectItem>
                <SelectItem value="2" className="text-red-600">
                  Unpaid
                </SelectItem>
                <SelectItem value="3" className="text-yellow-600">
                  Pending
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <Button type="submit">Save changes</Button>
    </DialogLayout>
  );
};
