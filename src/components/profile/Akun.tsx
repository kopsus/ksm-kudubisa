import React from "react";
import { Card } from "../ui/card";
import { Edit } from "lucide-react";

interface AkunProps {
  profileData: any;
  setDialog: React.Dispatch<React.SetStateAction<any>>;
}

export const Akun = ({ profileData, setDialog }: AkunProps) => {
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
              data: profileData,
              show: true,
            });
          }}
        />
      </div>
      <div className="grid grid-cols-3 gap-y-2 gap-x-5">
        <p>Username</p>
        <p className="col-span-2">: {profileData?.username}</p>

        <p className="text-nowrap">Nama Lengkap</p>
        <p className="col-span-2">: {profileData?.namaLengkap}</p>

        <p>No Telepon</p>
        <p className="col-span-2">: {profileData?.noTlp}</p>

        <p>RT / RW</p>
        <p className="col-span-2">
          : {profileData?.rt} / {profileData?.rw}
        </p>
      </div>
    </Card>
  );
};
