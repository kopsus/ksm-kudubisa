"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TypeProducts } from "@/api/produk/type";
import Image from "next/image";
import { Edit, Trash } from "lucide-react";
import { DialogState } from "../ProductView";

export const getColumns = (
  setDialog: React.Dispatch<React.SetStateAction<DialogState>>,
): ColumnDef<TypeProducts>[] => [
  {
    accessorKey: "image",
    header: "Gambar",
    cell: ({ row }) => {
      const imagePath = row.original.image;

      return (
        <div className="relative w-16 h-16 rounded overflow-hidden">
          <Image src={imagePath} alt="product" fill className="object-cover" />
        </div>
      );
    },
  },
  {
    accessorKey: "product_name",
    header: "Nama Produk",
  },
  {
    accessorKey: "price",
    header: "Harga",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(amount);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "jenis",
    header: "Jenis",
    cell: ({ row }) => {
      const jenis = row.getValue("jenis") as string;

      const label =
        jenis === "BelumDiPilah"
          ? "Belum Di Pilah"
          : jenis === "SudahDiPilah"
            ? "Sudah Di Pilah"
            : jenis;

      return <div>{label}</div>;
    },
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setDialog({ type: "UPDATE", show: true, data: product })
            }
            className="hover:opacity-70 transition-opacity"
          >
            <Edit size={18} className="text-blue-500" />
          </button>

          <button
            onClick={() =>
              setDialog({ type: "DELETE", show: true, data: product })
            }
            className="hover:opacity-70 transition-opacity"
          >
            <Trash size={18} className="text-red-500" />
          </button>
        </div>
      );
    },
  },
];
