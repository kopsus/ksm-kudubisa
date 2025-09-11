"use client";

import Image from "next/image";
import { formatIDR } from "@/lib/formated";
import ActionButtons from "./ActionButtons";
import { ColumnDef } from "@tanstack/react-table";
import { TypeProducts } from "@/api/produk/type";

export const columns: ColumnDef<TypeProducts>[] = [
  {
    accessorKey: "product_name",
    header: "Barang",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="flex items-center gap-2">
          <div className="min-w-16 max-w-16 h-16 rounded-xl overflow-hidden bg-primary shadow border">
            <Image
              src={data.image} // Ensure that a valid URL is always passed
              alt={row.getValue("product_name")}
              width={64}
              height={64}
              sizes="100vw"
            />
          </div>
          <p>{row.getValue("product_name")}</p>
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
      const jenisSampah = row.original.jenis; // Mengakses jenisSampah
      return <p>{jenisSampah}</p>;
    },
    filterFn: (row, id, value) => {
      // Memeriksa apakah jenis.jenisSampah termasuk dalam filter value
      const jenisSampah = row.getValue(id) as TypeProducts["jenis"];
      return value.includes(jenisSampah); // Mencocokkan dengan nilai filter
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
