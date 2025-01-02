import { Input } from "@/components/ui/input";
import React from "react";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FacetedFilter } from "@/components/_global/table/facetedFilter";
import { statusesTransaksi } from "@/data/transaksi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as XLSX from "xlsx";
import { formatDate } from "@/lib/formated";

interface ITableToolbar<TData> {
  table: Table<TData>;
}

export function TableToolbar<TData>({ table }: ITableToolbar<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const handleMonthFilter = (month: string) => {
    table
      .getColumn("createdAt")
      ?.setFilterValue((rowValue: string | number | Date) => {
        if (typeof rowValue === "string") {
          const rowMonth = new Date(rowValue).getMonth() + 1; // Bulan 0-based
          return rowMonth.toString() === month;
        }
        return false;
      });
  };

  const exportToExcel = () => {
    const filteredRows = table.getRowModel().rows;

    const worksheetData = filteredRows.map((row) => {
      const item = row.original as {
        user: {
          namaLengkap: string;
          rt: string;
          rw: string;
        };
        TransaksiProduk: {
          produk: {
            product_name: string;
            price: number;
          };
          quantity: number;
        }[];
        statusUser: string;
        statusAgen: string;
        createdAt: string;
      };
      return {
        Nama: item.user.namaLengkap,
        "RT / RW": `${item.user.rt} / ${item.user.rw}`,
        Barang: item.TransaksiProduk.map((tp) => tp.produk.product_name).join(
          ", "
        ),
        Berat: item.TransaksiProduk.map((tp) => tp.quantity).join(", "),
        "Harga / Kg": item.TransaksiProduk.map((tp) => tp.produk.price).join(
          ", "
        ),
        Total: item.TransaksiProduk.reduce(
          (sum, tp) => sum + (tp.quantity ?? 0) * tp.produk.price,
          0
        ),
        "Status User": item.statusUser,
        "Status Agen": item.statusAgen,
        createdAt: formatDate(item.createdAt),
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transaksi");

    XLSX.writeFile(workbook, "Transaksi.xlsx");
  };

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
        <Button
          onClick={exportToExcel}
          className="bg-green-500 text-white rounded hover:bg-green-600"
        >
          Export to Excel
        </Button>

        <Select onValueChange={(value) => handleMonthFilter(value)}>
          <SelectTrigger className="w-max">
            <SelectValue placeholder="Pilih Bulan" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 12 }, (_, i) => (
              <SelectItem key={i} value={(i + 1).toString()}>
                {new Date(0, i).toLocaleString("id-ID", { month: "long" })}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {table.getColumn("statusUser") && (
          <FacetedFilter
            column={table.getColumn("statusUser")}
            title="Status"
            options={statusesTransaksi}
          />
        )}
        <Input
          type="text"
          placeholder="Cari Nama"
          className="w-[150px] md:w-[250px] border outline-none"
          value={(table.getColumn("user")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("user")?.setFilterValue(event.target.value)
          }
        />
      </div>
    </div>
  );
}
