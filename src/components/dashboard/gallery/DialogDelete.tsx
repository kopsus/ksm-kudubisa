import DialogLayout from "@/components/_global/dialog";
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

  return (
    <DialogLayout
      show={dialog.type === "DELETE" && dialog.show}
      onHide={closeDialog}
    >
      <div className="flex flex-col gap-5">
        <p className="text-lg font-semibold leading-none tracking-tight text-center">
          Hapsu Image ini dari Gallery
        </p>
        <div className="flex items-center justify-center gap-5">
          <Button variant={"outline"} onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant={"danger"} onClick={closeDialog}>
            Delete
          </Button>
        </div>
      </div>
    </DialogLayout>
  );
};
