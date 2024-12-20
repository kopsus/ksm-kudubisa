"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TypeRiwayat } from "@/api/riwayat/type";
import Image from "next/image";
import { formatIDR } from "@/lib/formated";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { statusesRiwayat } from "@/data/riwayat";

export const columns: ColumnDef<TypeRiwayat>[] = [
  {
    accessorKey: "barang",
    header: "Barang",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex items-center gap-2">
          <div className="min-w-16 max-w-16 h-16 rounded-xl overflow-hidden bg-primary shadow border">
            <Image
              src={data.image}
              alt={row.getValue("barang")}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <p>{row.getValue("barang")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Harga",
    cell: ({ row }) => formatIDR(row.getValue("price")),
  },
  {
    accessorKey: "quantity",
    header: "Berat",
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => {
      const quantity = row.getValue("quantity") as number;
      const price = row.getValue("price") as number;
      const total = quantity * price;
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
      const status = row.getValue("status") as TypeRiwayat["status"];
      const item = statusesRiwayat.find(
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
