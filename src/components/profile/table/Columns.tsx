"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TypeTransaksi } from "@/api/transaksi/type";
import { formatIDR } from "@/lib/formated";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { statusesTransaksi } from "@/data/transaksi";
import { TypeProducts } from "@/api/produk/type";

export const Columns: ColumnDef<TypeTransaksi>[] = [
  {
    accessorKey: "barang",
    header: "Barang",
    cell: ({ row }) => {
      const barangList = row.getValue("barang") as TypeProducts[];

      if (!barangList || barangList.length === 0) {
        return <p>Belum ada barang</p>;
      }

      return <p>{barangList.map((barang) => `${barang.name}`).join(", ")}</p>;
    },
  },
  {
    accessorKey: "barang",
    header: "Berat",
    id: "barang-berat",
    cell: ({ row }) => {
      const barangList = row.getValue("barang") as TypeProducts[];

      if (!barangList || barangList.length === 0) {
        return <p>Belum ada barang</p>;
      }

      const totalBerat = barangList.reduce(
        (total, barang) => total + (barang.quantity ?? 0),
        0
      );

      return <p>{totalBerat} Kg</p>;
    },
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => {
      const barangList = row.getValue("barang") as TypeProducts[];

      if (!barangList || barangList.length === 0) {
        return <p>Rp 0</p>;
      }

      // Hitung total harga semua barang
      const total = barangList.reduce(
        (sum, barang) => sum + (barang.quantity ?? 0) * barang.price,
        0
      );

      return (
        <Button variant={"outline"} size={"sm"}>
          {formatIDR(total)}
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as TypeTransaksi["status"];
      const item = statusesTransaksi.find(
        (status) => status.value === row.getValue("status")
      );

      if (!item) {
        return null;
      }

      const variant =
        status === "Paid"
          ? "default"
          : status === "Pending"
          ? "pending"
          : "unpaid";

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
