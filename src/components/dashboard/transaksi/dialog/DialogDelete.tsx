import { useState } from "react";
import { DialogProps } from "../TransaksiMasyarakatView";
import { deleteTransaction } from "@/lib/action/transactionAction";
import DialogLayout from "../../_global/Layouts/Dialog";
import { Button } from "@/components/ui/button";

export const DialogDeleteTransaction = ({ dialog, setDialog }: DialogProps) => {
  const [isPending, setIsPending] = useState(false);

  const closeDialog = () => {
    setDialog({ type: null, show: false, data: null });
  };

  const handleDelete = async () => {
    setIsPending(true);

    const transactionId = dialog.data?.id || dialog.data;
    const result = await deleteTransaction(transactionId);

    setIsPending(false);

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
      titleDelete="Hapus item ini dari Transaksi ?"
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
