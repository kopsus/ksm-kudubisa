import { useMutationProduct } from "@/api/produk/mutations";
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

  const { serviceProduct } = useMutationProduct();

  const handleDelete = async () => {
    await serviceProduct({
      type: "delete",
      id: dialog.data?.id,
    });
    closeDialog();
  };

  return (
    <DialogLayout
      show={dialog.type === "DELETE" && dialog.show}
      onHide={closeDialog}
      titleDelete="Hapus item ini dari produk ?"
    >
      <div className="flex items-center justify-center gap-5">
        <Button variant={"outline"} onClick={closeDialog}>
          Cancel
        </Button>
        <Button variant={"danger"} onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </DialogLayout>
  );
};
