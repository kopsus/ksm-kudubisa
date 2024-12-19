"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TypeRiwayat } from "@/api/riwayat/type";
import Image from "next/image";
import { formatIDR } from "@/lib/formated";
import { jenisSampah } from "@/data/product";
import ActionButtons from "./ActionButtons";

export const columns: ColumnDef<TypeRiwayat>[] = [
  {
    accessorKey: "name",
    header: "Barang",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex items-center gap-2">
          <div className="min-w-16 max-w-16 h-16 rounded-xl overflow-hidden bg-primary shadow border">
            <Image
              src={data.image}
              alt={row.getValue("name")}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <p>{row.getValue("name")}</p>
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
    accessorKey: "jenis",
    header: "Penjualan",
    cell: ({ row }) => {
      const item = jenisSampah.find(
        (status) => status.value === row.getValue("jenis")
      );

      if (!item) {
        return null;
      }

      return <p>{item.label}</p>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "Action",
    header: "Action",
    cell: ({ row }) => {
      const item = row.original;
      const itemId = row.original.id;
      return <ActionButtons item={item} itemId={itemId} />;
    },
  },
];
