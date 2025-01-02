"use client";

import Link from "next/link";
import SidebarItem from "./SidebarItem";
import ClickOutside from "../ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import {
  ArrowLeft,
  HandCoins,
  Images,
  LayoutDashboard,
  Trash2,
  Users,
} from "lucide-react";
import { Logo } from "@/components/_global/logo";
import React from "react";
import { useQueryProfile } from "@/api/users/queries";

// Define a MenuItem type
interface MenuItem {
  icon: React.JSX.Element;
  label: string;
  route: string;
  children?: { label: string; route: string }[]; // Make 'children' optional
}

type Role = "Admin" | "Agen" | "Pengepul";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const getMenuGroups = (role: Role): MenuItem[] => {
  const commonMenuItems: MenuItem[] = [
    {
      icon: <LayoutDashboard />,
      label: "Dashboard",
      route: "/dashboard",
    },
  ];

  const menuGroups = {
    Admin: [
      ...commonMenuItems,
      {
        icon: <Images />,
        label: "Gallery",
        route: "/gallery",
      },
      {
        icon: <Trash2 />,
        label: "Produk",
        route: "/produk",
      },
      {
        icon: <HandCoins />,
        label: "Transaksi",
        route: "#",
        children: [
          { label: "Agen", route: "/transaksi/agen" },
          { label: "Pengepul", route: "/transaksi/pengepul" },
        ],
      },
      {
        icon: <Users />,
        label: "Pengguna",
        route: "#",
        children: [
          { label: "Masyarakat", route: "/users/masyarakat" },
          { label: "Agen", route: "/users/agen" },
          { label: "Pengepul", route: "/users/pengepul" },
        ],
      },
    ],
    Agen: [
      ...commonMenuItems,
      {
        icon: <HandCoins />,
        label: "Transaksi",
        route: "/transaksi/agen",
      },
    ],
    Pengepul: [
      ...commonMenuItems,
      {
        icon: <HandCoins />,
        label: "Transaksi",
        route: "/transaksi/pengepul",
      },
    ],
  };

  return menuGroups[role];
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");
  const { dataProfile } = useQueryProfile();

  const menuItems = dataProfile
    ? getMenuGroups(dataProfile.role?.role as Role)
    : [];

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-gray-800  duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <Link href="/">
            <Logo />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <ArrowLeft color="white" />
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                MENU
              </h3>
              <ul className="mb-6 flex flex-col gap-1.5">
                {menuItems?.map((menuItem, index) => (
                  <SidebarItem
                    key={index}
                    item={menuItem}
                    pageName={pageName}
                    setPageName={setPageName}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                  />
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
