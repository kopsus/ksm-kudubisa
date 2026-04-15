"use client";

import { Eye, MoreHorizontal, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Sesuaikan interface untuk menerima setDialog dan userRole
interface ITableRowActions {
  item: any; // Kita butuh data lengkap (termasuk id) untuk dikirim ke Dialog
  setDialog: React.Dispatch<React.SetStateAction<any>>;
  userRole: string; // Role user yang sedang login
}

export function DataTableRowActions({
  item,
  setDialog,
  userRole,
}: ITableRowActions) {
  const router = useRouter();

  const handleDelete = () => {
    setDialog({
      type: "DELETE",
      show: true,
      data: item.id, // Sesuai dengan yang dibutuhkan oleh DialogDelete kamu
    });
  };

  const handleDetail = () => {
    // Pastikan base path-nya sesuai dengan folder routing kamu
    router.push(`/transaksi/${item.id}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-end">
          <Button
            variant="ghost"
            className="rounded bg-transparent hover:bg-slate-50 flex h-8 w-8 p-0"
          >
            <MoreHorizontal />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={handleDetail}>
          Detail
          <DropdownMenuShortcut>
            <Eye size={16} />
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        {/* Validasi role sekarang menggunakan prop userRole */}
        {userRole === "Admin" && (
          <DropdownMenuItem onClick={handleDelete}>
            Delete
            <DropdownMenuShortcut>
              <Trash size={16} color="red" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
