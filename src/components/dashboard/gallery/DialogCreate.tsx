import DialogLayout from "@/components/dashboard/_global/Layouts/Dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      title={`${dialog.type === "CREATE" ? "Tambah Gallery" : "Edit Gallery"}`}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="w-52 h-52 rounded-xl border bg-white shadow-1 overflow-hidden">
          {previewUrl || dialog.data?.image ? (
            <Image src={imageSrc} alt="" width={0} height={0} />
          ) : null}
        </div>
        <Input type="file" onChange={handleImageChange} className="max-w-72" />
        <div className="flex items-center justify-center gap-5">
          <Button onClick={closeDialog}>Simpan</Button>
        </div>
      </div>
    </DialogLayout>
  );
};
