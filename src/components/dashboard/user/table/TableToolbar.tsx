import { Input } from "@/components/ui/input";
import React from "react";
import { Table } from "@tanstack/react-table";

interface ITableToolbar<TData> {
  table: Table<TData>;
}

export function TableToolbar<TData>({ table }: ITableToolbar<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-end">
      <Input
        type="text"
        placeholder="Cari Nama"
        className="w-[150px] md:w-[250px] border outline-none"
        value={
          (table.getColumn("nama_lengkap")?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table.getColumn("nama_lengkap")?.setFilterValue(event.target.value)
        }
      />
    </div>
  );
}
