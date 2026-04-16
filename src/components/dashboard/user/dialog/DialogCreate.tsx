import { useState } from "react";
import { DialogStateUser, DialogUserProps, EnumRole } from "../UserView";
import { createUser, updateUser } from "@/lib/action/userAction";
import DialogLayout from "../../_global/Layouts/Dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dataRT, dataRW } from "@/data/user";
import { Button } from "@/components/ui/button";
import { TypeUser } from "@/api/users/type";

export const DialogCreate = ({ dialog, setDialog }: DialogUserProps) => {
  const [isPending, setIsPending] = useState(false);

  const closeDialog = () => {
    setDialog({ type: null, show: false, data: null });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDialog((prev) => ({
      ...prev,
      data: { ...prev.data, [name]: value },
    }));
  };

  const onValueChange = (value: string, name: string) => {
    setDialog((prev) => ({
      ...prev,
      data: { ...prev.data, [name]: value },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true); // Mulai status loading

    // Ambil data dari state dialog, gunakan nilai default jika kosong
    const payload: Partial<TypeUser> = {
      username: dialog.data?.username ?? "",
      namaLengkap: dialog.data?.namaLengkap ?? "",
      noTlp: dialog.data?.noTlp ?? "",
      rt: dialog.data?.rt ?? "",
      rw: dialog.data?.rw ?? "",
      role: dialog.data?.role ?? EnumRole.Agen, // Saya ubah 'roleId' menjadi 'role'
    };

    // Tambahkan password jika ada isinya
    if (dialog.data?.password) {
      payload.password = dialog.data.password;
    }

    let result;
    if (dialog.type === "CREATE") {
      result = await createUser(payload);
    } else if (dialog.type === "UPDATE") {
      result = await updateUser(dialog.data?.id, payload);
    }

    setIsPending(false); // Selesai status loading

    if (result && result.success) {
      closeDialog();
      // Tidak perlu refetch() React Query karena revalidatePath di Server Action
      // otomatis me-refresh data komponen server!
    } else if (result) {
      alert(result.message); // Tampilkan pesan error (misal: password kurang kuat)
    }
  };

  return (
    <DialogLayout
      show={
        (dialog.type === "CREATE" || dialog.type === "UPDATE") && dialog.show
      }
      onHide={closeDialog}
      title={`${dialog.type === "CREATE" ? "Tambah User" : "Edit User"}`}
    >
      <form onSubmit={handleSubmit} className="grid gap-4 py-4">
        {/* Username */}
        <div className="grid grid-cols-4 items-center gap-4">
          <p>Username</p>
          <Input
            placeholder="Username"
            name="username"
            className="col-span-3"
            value={dialog.data?.username ?? ""}
            onChange={onInputChange}
            required
            disabled={dialog.type === "UPDATE"} // Opsional: biasanya username tidak boleh diubah setelah dibuat
          />
        </div>

        {/* Nama Lengkap */}
        <div className="grid grid-cols-4 items-center gap-4">
          <p>Nama Lengkap</p>
          <Input
            placeholder="Nama Lengkap"
            name="namaLengkap"
            className="col-span-3"
            value={dialog.data?.namaLengkap ?? ""}
            onChange={onInputChange}
            required
          />
        </div>

        {/* No Telephone */}
        <div className="grid grid-cols-4 items-center gap-4">
          <p>No Telephone</p>
          <Input
            placeholder="No Telephone"
            type="number"
            name="noTlp"
            className="col-span-3"
            value={dialog.data?.noTlp ?? ""}
            onChange={onInputChange}
            required
          />
        </div>

        {/* RT / RW */}
        <div className="grid grid-cols-4 items-center gap-4">
          <p>RT / RW</p>
          <div className="flex gap-5 justify-between col-span-3">
            <Select
              onValueChange={(value) => onValueChange(value, "rt")}
              value={dialog.data?.rt ?? ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="RT" />
              </SelectTrigger>
              <SelectContent>
                {dataRT.map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) => onValueChange(value, "rw")}
              value={dialog.data?.rw ?? ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="RW" />
              </SelectTrigger>
              <SelectContent>
                {dataRW.map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Role */}
        <div className="grid grid-cols-4 items-center gap-4">
          <p>Role</p>
          <Select
            onValueChange={(value) => onValueChange(value, "role")}
            value={dialog.data?.role ?? EnumRole.Agen}
          >
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={EnumRole.Admin}>{EnumRole.Admin}</SelectItem>
              <SelectItem value={EnumRole.Agen}>{EnumRole.Agen}</SelectItem>
              <SelectItem value={EnumRole.Masyarakat}>
                {EnumRole.Masyarakat}
              </SelectItem>
              <SelectItem value={EnumRole.Pengepul}>
                {EnumRole.Pengepul}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Password */}
        <div className="grid grid-cols-4 items-center gap-4">
          <p>Password</p>
          <Input
            placeholder={
              dialog.type === "UPDATE"
                ? "Biarkan kosong jika tidak diubah"
                : "Password (min 8 karakter)"
            }
            name="password"
            type="password"
            className="col-span-3"
            value={dialog.data?.password ?? ""}
            onChange={onInputChange}
            required={dialog.type === "CREATE"} // Wajib saat tambah, opsional saat edit
          />
        </div>

        <Button disabled={isPending} type="submit" className="mt-5">
          {isPending
            ? "Menyimpan..."
            : dialog.type === "CREATE"
              ? "Tambah User"
              : "Simpan Perubahan"}
        </Button>
      </form>
    </DialogLayout>
  );
};
