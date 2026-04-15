import { useState } from "react";
import { DialogUserProps } from "../AgenView";
import { deleteUser } from "@/lib/action/userAction";
import DialogLayout from "../../_global/Layouts/Dialog";
import { Button } from "@/components/ui/button";

export const DialogDelete = ({ dialog, setDialog }: DialogUserProps) => {
  const [isPending, setIsPending] = useState(false);

  const closeDialog = () => setDialog({ type: null, show: false, data: null });

  const handleDelete = async () => {
    setIsPending(true);
    // Menggunakan Server Action
    const result = await deleteUser(dialog.data?.id);
    setIsPending(false);

    if (result.success) closeDialog();
    else alert(result.message);
  };

  return (
    <DialogLayout
      show={dialog.type === "DELETE" && dialog.show}
      onHide={closeDialog}
      titleDelete="Hapus User ?"
    >
      <div className="flex items-center justify-center gap-5">
        <Button disabled={isPending} variant={"outline"} onClick={closeDialog}>
          Cancel
        </Button>
        <Button disabled={isPending} variant={"danger"} onClick={handleDelete}>
          {isPending ? "Menghapus..." : "Delete"}
        </Button>
      </div>
    </DialogLayout>
  );
};
