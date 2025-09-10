import { useState } from "react";
import Link from "next/link";
import ClickOutside from "../ClickOutside";
import { ChevronDown, LoaderCircle, LogOut } from "lucide-react";
import { useAtom, useAtomValue } from "jotai";
import { storeIsLogin } from "@/store/isLogin";
import { useMutationAuth } from "@/api/auth/mutation";
import { useRouter } from "next/navigation";
import { profileAtom } from "@/store/profile";

const DropdownUser = () => {
  const dataProfile = useAtomValue(profileAtom);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [_, setIsLogin] = useAtom(storeIsLogin);
  const router = useRouter();

  const { serviceAuth } = useMutationAuth();

  const handleLogout = async () => {
    await serviceAuth({
      type: "logout",
      body: "",
    });

    setIsLogin(false);
    router.push("/");
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {dataProfile?.username}
          </span>
          <span className="block text-xs">{dataProfile?.role}</span>
        </span>
        <ChevronDown />
      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <button
            onClick={handleLogout}
            className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            <LogOut />
            Log Out
          </button>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </ClickOutside>
  );
};

export default DropdownUser;
