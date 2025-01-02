import { Input } from "@/components/ui/input";
import React from "react";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FacetedFilter } from "@/components/_global/table/facetedFilter";
import { jenisSampah } from "@/data/product";

interface ITableToolbar<TData> {
  table: Table<TData>;
}

export function TableToolbar<TData>({ table }: ITableToolbar<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-end">
      <div className="flex items-center gap-2 overflow-x-auto">
        {isFiltered && (
          <Button
            variant="outline"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}

        {table.getColumn("jenis") && (
          <FacetedFilter
            column={table.getColumn("jenis")}
            title="Filter"
            options={jenisSampah} // Menyediakan opsi yang sesuai dengan nilai yang ada pada kolom `jenis`
          />
        )}
        <Input
          type="text"
          placeholder="Cari Nama"
          className="w-[150px] md:w-[250px] border outline-none"
          value={
            (table.getColumn("product_name")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("product_name")?.setFilterValue(event.target.value)
          }
        />
      </div>
    </div>
  );
}
