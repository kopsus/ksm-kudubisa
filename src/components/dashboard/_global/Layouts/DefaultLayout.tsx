"use client";

import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";

export default function DefaultLayout({
  children,
  userProfile, // Tangkap dari RootLayout
}: {
  children: React.ReactNode;
  userProfile: any;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Lempar userProfile ke Sidebar jika menu butuh pembatasan Role */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        userProfile={userProfile}
      />

      <div className="relative flex flex-1 flex-col lg:ml-72.5">
        {/* Lempar userProfile ke Header */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          userProfile={userProfile}
        />

        <main>
          <div className="p-4 md:p-6 2xl:p-10">{children}</div>
        </main>
      </div>
    </>
  );
}
