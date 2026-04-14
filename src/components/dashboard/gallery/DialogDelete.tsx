import { deleteGallery } from "@/lib/action/galleryActions";
import React, { useState } from "react";
import DialogLayout from "../_global/Layouts/Dialog";
import { Button } from "@/components/ui/button";
import { DialogProps } from "./DialogCreate";

export const DialogDelete = ({ dialog, setDialog }: DialogProps) => {
  const [isPending, setIsPending] = useState(false);

  const closeDialog = () => {
    setDialog((prev) => ({
      ...prev,
      show: false,
    }));
  };

  const handleDeleteGallery = async () => {
    setIsPending(true); // Mulai loading

    // dialog.data berisi ID dari item yang diklik
    const result = await deleteGallery(dialog.data);

    setIsPending(false); // Matikan loading

    if (result.success) {
      closeDialog();
    } else {
      alert(result.message);
    }
  };

  return (
    <DialogLayout
      show={dialog.type === "DELETE" && dialog.show}
      onHide={closeDialog}
      titleDelete="Hapus Image ini dari Gallery"
    >
      <div className="flex items-center justify-center gap-5">
        <Button disabled={isPending} variant={"outline"} onClick={closeDialog}>
          Cancel
        </Button>
        <Button
          disabled={isPending}
          variant={"danger"}
          onClick={handleDeleteGallery}
        >
          {isPending ? "Menghapus..." : "Delete"}
        </Button>
      </div>
    </DialogLayout>
  );
};
