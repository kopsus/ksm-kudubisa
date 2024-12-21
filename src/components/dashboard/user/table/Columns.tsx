import { ColumnDef } from "@tanstack/react-table";
import { TypeUser } from "@/api/users/type";
import ActionButtons from "./ActionButtons";

export const Columns: ColumnDef<TypeUser>[] = [
  {
    accessorKey: "username",
    header: "User Name",
  },
  {
    accessorKey: "nama_lengkap",
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
    accessorKey: "no_tlp",
    header: "No Telephone",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.original.role.role_name;
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
