import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export const FormRegister = () => {
  return (
    <form className="flex flex-col gap-2">
      <Input placeholder="Username" />
      <Input placeholder="Nama Lengkap" />
      <Input placeholder="No Tlp" />
      <div className="flex gap-5 justify-between">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="RT" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="RW" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Input placeholder="Kata Sandi" type="password" />
      <div className="flex items-start gap-2 my-3">
        <input type="checkbox" />
        <p className="text-xs text-black/70">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy.
        </p>
      </div>
      <Button>Daftar</Button>
      <p className="text-sm">
        Sudah Punya Akun?{" "}
        <Link href="/login" className="font-bold text-primary">
          Login
        </Link>
      </p>
    </form>
  );
};
