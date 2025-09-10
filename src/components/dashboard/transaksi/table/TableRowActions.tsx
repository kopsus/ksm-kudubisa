"use client";

import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { storeDialog } from "@/store/dialog";
import { useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { profileAtom } from "@/store/profile";

interface ITableRowActions {
  itemId: string;
}

export function DataTableRowActions({ itemId }: ITableRowActions) {
  const dataProfile = useAtomValue(profileAtom);
  const setDialog = useSetAtom(storeDialog);
  const router = useRouter();

  const handleDelete = () => {
    setDialog({
      type: "DELETE",
      show: true,
      data: itemId,
    });
  };

  const handleDetail = () => {
    router.push(itemId);
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
        {dataProfile?.role === "Admin" && (
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
