import { ColumnDef } from "@tanstack/react-table";
import { TypeUser } from "@/api/users/type";
import ActionButtons from "./ActionButtons";

export const Columns: ColumnDef<TypeUser>[] = [
  {
    accessorKey: "username",
    header: "User Name",
  },
  {
    accessorKey: "namaLengkap",
    header: () => <p className="text-nowrap">Nama Lengkap</p>,
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
    accessorKey: "noTlp",
    header: "No Telephone",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.original.role;
      return <p>{role}</p>;
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
