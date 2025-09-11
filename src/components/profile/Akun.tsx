import React from "react";
import { Card } from "../ui/card";
import { Edit } from "lucide-react";
import { useAtom } from "jotai";
import { storeDialog } from "@/store/dialog";
import { useQueryProfile } from "@/api/users/queries";

export const Akun = () => {
  const [_, setDialog] = useAtom(storeDialog);
  const { dataProfile } = useQueryProfile();

  return (
    <Card className="sticky top-20">
      <div className="flex justify-between">
        <p className="titleSection mb-5">Akun Saya</p>
        <Edit
          size={20}
          className="cursor-pointer"
          onClick={() => {
            setDialog({
              type: "UPDATE",
              data: dataProfile,
              show: true,
            });
          }}
        />
      </div>
      <div className="grid grid-cols-3 gap-y-2 gap-x-5">
        <p>Username</p>
        <p className="col-span-2">: {dataProfile?.username}</p>

        <p className="text-nowrap">Nama Lengkap</p>
        <p className="col-span-2">: {dataProfile?.namaLengkap}</p>

        <p>No Telepon</p>
        <p className="col-span-2">: {dataProfile?.noTlp}</p>

        <p>RT / RW</p>
        <p className="col-span-2">
          : {dataProfile?.rt} / {dataProfile?.rw}
        </p>
      </div>
    </Card>
  );
};
