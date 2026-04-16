"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, LogOut } from "lucide-react";
import { logoutUserAction } from "@/lib/action/authAction";
import ClickOutside from "../ClickOutside";

const DropdownUser = ({ userProfile }: { userProfile: any }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    // Panggil aksi logout di server (ini akan menghapus cookie JWT)
    const result = await logoutUserAction();

    if (result.success) {
      // Gunakan router.push agar mulus, tidak perlu reload paksa
      router.push(result.redirect || "/login");
    }
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={(e) => {
          e.preventDefault();
          setDropdownOpen(!dropdownOpen);
        }}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          {/* Ambil data dari props, bukan Jotai lagi */}
          <span className="block text-sm font-medium text-black dark:text-white">
            {userProfile?.username || "Guest"}
          </span>
          <span className="block text-xs">{userProfile?.role || "-"}</span>
        </span>
        <ChevronDown />
      </Link>

      {dropdownOpen && (
        <div className="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            <LogOut />
            Log Out
          </button>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
