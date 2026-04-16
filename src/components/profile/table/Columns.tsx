"use client";

import { ColumnDef } from "@tanstack/react-table";
import { formatIDR } from "@/lib/formated";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { statusesTransaksi } from "@/data/transaksi";
import { TypeTransaksi, TypeTransaksiProduk } from "@/types/transaction";
import { TypeProducts } from "@/types/product";

export const Columns: ColumnDef<TypeTransaksi>[] = [
  {
    accessorKey: "TransaksiProduk",
    header: "Barang",
    cell: ({ row }) => {
      const barangList = row.getValue("TransaksiProduk") as TypeProducts[];

      if (!barangList || barangList.length === 0) {
        return <p>Belum ada barang</p>;
      }

      return (
        <ul className="flex flex-col gap-2">
          {barangList.map((barang, index) => (
            <li key={index}>{barang?.product_name}</li>
          ))}
        </ul>
      );
    },
  },
  {
    header: "Berat",
    cell: ({ row }) => {
      const barangList = row.getValue(
        "TransaksiProduk",
      ) as TypeTransaksiProduk[];

      if (!barangList || barangList.length === 0) {
        return <p>Belum ada barang</p>;
      }

      return (
        <ul className="flex flex-col gap-2">
          {barangList.map((barang, index) => (
            <li key={index}>{barang.quantity} kg</li>
          ))}
        </ul>
      );
    },
  },
  {
    header: "Harga / kg",
    cell: ({ row }) => {
      const barangList = row.getValue("TransaksiProduk") as any[];

      if (!barangList || barangList.length === 0) {
        return <p>Belum ada barang</p>;
      }

      return (
        <ul className="flex flex-col gap-2">
          {barangList.map((barang, index) => (
            <li key={index}>{formatIDR(barang?.price)}</li>
          ))}
        </ul>
      );
    },
  },
  {
    header: "Subtotal",
    cell: ({ row }) => {
      const barangList = row.getValue("TransaksiProduk") as any[];

      if (!barangList || barangList.length === 0) {
        return <p>Belum ada barang</p>;
      }

      return (
        <ul className="flex flex-col gap-2">
          {barangList.map((barang, index) => {
            // Menghitung subtotal per produk
            const subtotalPerProduk = barang.quantity * barang?.price;

            return <li key={index}>{formatIDR(subtotalPerProduk)}</li>;
          })}
        </ul>
      );
    },
  },
  {
    header: "Total",
    cell: ({ row }) => {
      const barangList = row.getValue("TransaksiProduk") as any[];

      if (!barangList || barangList.length === 0) {
        return <p>Rp 0</p>;
      }

      // Hitung total harga semua barang
      const total = barangList.reduce(
        (sum, barang) => sum + (barang.quantity ?? 0) * barang?.price,
        0,
      );

      return (
        <Button variant={"outline"} size={"sm"}>
          {formatIDR(total)}
        </Button>
      );
    },
  },
  {
    accessorKey: "statusUser",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("statusUser") as TypeTransaksi["statusUser"];
      const item = statusesTransaksi.find(
        (status) => status.value === row.getValue("statusUser"),
      );

      if (!item) {
        return null;
      }

      const variant =
        status === "Paid"
          ? "default"
          : status === "Process"
            ? "process"
            : status === "Failed"
              ? "failed"
              : "pending";

      return (
        <Badge variant={variant}>
          <span>{item.label}</span>
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
