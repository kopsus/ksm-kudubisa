import { ColumnDef } from "@tanstack/react-table";
import { TypeRiwayat } from "@/api/riwayat/type";
import ActionButtons from "./ActionButtons";
import { statusesRiwayat } from "@/data/riwayat";
import { Badge } from "@/components/ui/badge";

export const ColumnsMasyarakat: ColumnDef<TypeRiwayat>[] = [
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "rt",
    header: () => <p className="text-nowrap">RT / RW</p>,
    cell: ({ row }) => {
      const rt = row.original.rt;
      const rw = row.original.rw;
      return (
        <p className="text-nowrap">
          {rt} / {rw}
        </p>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "barang",
    header: "Barang",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
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
