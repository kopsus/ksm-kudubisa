"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      {/* <!-- ===== Sidebar Start ===== --> */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* <!-- ===== Sidebar End ===== --> */}

      {/* <!-- ===== Content Area Start ===== --> */}
      <div className="relative flex flex-1 flex-col lg:ml-72.5">
        {/* <!-- ===== Header Start ===== --> */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Header End ===== --> */}

        {/* <!-- ===== Main Content Start ===== --> */}
        <main>
          <div className="p-4 md:p-6 2xl:p-10">{children}</div>
        </main>
        {/* <!-- ===== Main Content End ===== --> */}
      </div>
      {/* <!-- ===== Content Area End ===== --> */}
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
