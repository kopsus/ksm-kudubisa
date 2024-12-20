import { Edit, Trash } from "lucide-react";
import { useSetAtom } from "jotai";
import { storeDialog } from "@/store/dialog";
import { TypeRiwayat } from "@/api/riwayat/type";

interface IActionButtons {
  item: TypeRiwayat;
  itemId: string;
}

const ActionButtons = ({ item, itemId }: IActionButtons) => {
  const setDialog = useSetAtom(storeDialog);

  const handleEdit = () => {
    setDialog({
      type: "UPDATE",
      show: true,
      data: item,
    });
  };

  const handleDelete = () => {
    setDialog({
      type: "DELETE",
      show: true,
      data: itemId,
    });
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <Edit size={18} className="cursor-pointer" onClick={handleEdit} />
      <Trash
        size={18}
        color="red"
        className="cursor-pointer"
        onClick={handleDelete}
      />
    </div>
  );
};

export default ActionButtons;
