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
import { jenisSampah } from "@/data/product";
import useImagePreview from "@/hooks/useImagePreview";
import { storeDialog } from "@/store/dialog";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";

export const DialogCreate = () => {
  const [dialog, setDialog] = useAtom(storeDialog);
  const { previewUrl, setPreviewUrl, handleImageChange } = useImagePreview();

  const closeDialog = () => {
    setDialog((prev) => ({
      ...prev,
      show: false,
    }));
    setPreviewUrl(null);
  };

  const imageSrc = previewUrl || dialog.data?.image || "";

  return (
    <DialogLayout
      show={dialog.type !== "DELETE" && dialog.show}
      onHide={closeDialog}
      title={`${dialog.type === "CREATE" ? "Tambah Produk" : "Edit Produk"}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-3">
          <div className="w-40 h-40 rounded-xl border bg-white shadow-1 overflow-hidden">
            {previewUrl || dialog.data?.image ? (
              <Image src={imageSrc} alt="" width={0} height={0} />
            ) : null}
          </div>
          <Input
            type="file"
            onChange={handleImageChange}
            className="max-w-72"
          />
        </div>
        <div className="grid grid-cols-4 items-center">
          <p>Nama Barang</p>
          <Input placeholder="Nama Barang" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center">
          <p>Harga</p>
          <Input
            placeholder="Harga Barang"
            type="number"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center">
          <p>Jenis Penjualan</p>
          <div className="col-span-3">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Jenis Penjualan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Sudah di pilah</SelectItem>
                <SelectItem value="2">Belum di pilah</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={closeDialog}>Simpan</Button>
        </div>
      </div>
    </DialogLayout>
  );
};
