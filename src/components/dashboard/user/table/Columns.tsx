import { ColumnDef } from "@tanstack/react-table";
import { TypeUser } from "@/api/users/type";
import { DialogState } from "../../produk/ProductView";
import { Edit, Trash } from "lucide-react";

export const getColumnsUser = (
  setDialog: React.Dispatch<React.SetStateAction<DialogState>>,
): ColumnDef<TypeUser>[] => [
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
      const user = row.original;
      return (
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setDialog({ type: "UPDATE", show: true, data: user })
            }
            className="hover:opacity-70 transition-opacity"
          >
            <Edit size={18} className="text-blue-500" />
          </button>

          <button
            onClick={() =>
              setDialog({ type: "DELETE", show: true, data: user })
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
