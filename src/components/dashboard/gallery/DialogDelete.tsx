import { useMutationGallery } from "@/api/gallery/mutations";
import DialogLayout from "@/components/dashboard/_global/Layouts/Dialog";
import { Button } from "@/components/ui/button";
import { storeDialog } from "@/store/dialog";
import { useAtom } from "jotai";
import React from "react";

export const DialogDelete = () => {
  const [dialog, setDialog] = useAtom(storeDialog);

  const closeDialog = () => {
    setDialog((prev) => ({
      ...prev,
      show: false,
    }));
  };

  const { serviceGallery } = useMutationGallery();

  const deleteGallery = async () => {
    await serviceGallery({
      type: "delete",
      id: dialog.data,
    });
    closeDialog();
  };

  return (
    <DialogLayout
      show={dialog.type === "DELETE" && dialog.show}
      onHide={closeDialog}
      titleDelete="Hapus Image ini dari Gallery"
    >
      <div className="flex items-center justify-center gap-5">
        <Button variant={"outline"} onClick={closeDialog}>
          Cancel
        </Button>
        <Button variant={"danger"} onClick={deleteGallery}>
          Delete
        </Button>
      </div>
    </DialogLayout>
  );
};
