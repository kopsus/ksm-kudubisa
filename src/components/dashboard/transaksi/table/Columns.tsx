import { ColumnDef } from "@tanstack/react-table";
import { TypeTransaksi, TypeTransaksiProduk } from "@/api/transaksi/type";
import { statusesTransaksi } from "@/data/transaksi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate, formatIDR } from "@/lib/formated";
import { TypeProducts } from "@/api/produk/type";
import { DataTableRowActions } from "./TableRowActions";

export const Columns: ColumnDef<TypeTransaksi>[] = [
  {
    accessorKey: "user",
    header: "Nama",
    cell: ({ row }) => {
      const name = row.original.user.namaLengkap;
      return <p className="text-nowrap">{name}</p>;
    },
    filterFn: (row, value) => {
      return row.original.user.namaLengkap
        .toLowerCase()
        .includes(value.toLowerCase());
    },
  },
  {
    accessorKey: "rt",
    header: () => <p className="text-nowrap">RT / RW</p>,
    cell: ({ row }) => {
      const rt = row.original.user.rt;
      const rw = row.original.user.rw;
      return (
        <p>
          {rt} / {rw}
        </p>
      );
    },
  },
  {
    accessorKey: "TransaksiProduk",
    header: "Barang",
    cell: ({ row }) => {
      const barangList = row.getValue("TransaksiProduk") as {
        produk: TypeProducts; // We specify that produk is of type TypeProducts
      }[];

      if (!barangList || barangList.length === 0) {
        return <p>Belum ada barang</p>;
      }

      return (
        <ul className="flex flex-col gap-2">
          {barangList.map((barang, index) => (
            <li key={index}>{barang.produk?.product_name}</li>
          ))}
        </ul>
      );
    },
  },
  {
    header: "Total",
    cell: ({ row }) => {
      const barangList = row.getValue(
        "TransaksiProduk"
      ) as TypeTransaksiProduk[];

      if (!barangList || barangList.length === 0) {
        return <p>Rp 0</p>;
      }

      // Hitung total harga semua barang
      const total = barangList.reduce(
        (sum, barang) => sum + (barang.quantity ?? 0) * barang.produk.price,
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
    accessorKey: "statusUser",
    header: () => <p className="text-nowrap">Status Agen</p>,
    cell: ({ row }) => {
      const status = row.getValue("statusUser") as TypeTransaksi["statusUser"];
      const item = statusesTransaksi.find(
        (status) => status.value === row.getValue("statusUser")
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
  {
    accessorKey: "statusAgen",
    header: () => <p className="text-nowrap">Status Pengepul</p>,
    cell: ({ row }) => {
      const status = row.getValue("statusAgen") as TypeTransaksi["statusAgen"];
      const item = statusesTransaksi.find(
        (status) => status.value === row.getValue("statusAgen")
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
  {
    accessorKey: "createdAt",
    header: "Tanggal",
    cell: ({ row }) => formatDate(row.original.createdAt!),
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue) return true; // Jika tidak ada filter, tampilkan semua data
      const rowValue = row.getValue(columnId) as string; // Ambil nilai tanggal
      const rowMonth = new Date(rowValue).getMonth() + 1; // Ambil bulan dari tanggal
      return rowMonth.toString() === filterValue; // Bandingkan dengan bulan yang difilter
    },
  },

  {
    accessorKey: "Action",
    header: "Action",
    cell: ({ row }) => {
      const itemId = row.original.id;
      return <DataTableRowActions itemId={itemId} />;
    },
  },
];
