import React from "react";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FacetedFilter } from "@/components/_global/table/facetedFilter";
import { statusesTransaksi } from "@/data/transaksi";

interface ITableToolbar<TData> {
  table: Table<TData>;
}

export function TableToolbar<TData>({ table }: ITableToolbar<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-end">
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
      {table.getColumn("statusUser") && (
        <FacetedFilter
          column={table.getColumn("statusUser")}
          title="Status"
          options={statusesTransaksi}
        />
      )}
    </div>
  );
}
