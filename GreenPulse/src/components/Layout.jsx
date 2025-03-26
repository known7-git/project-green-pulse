import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // Import your existing Navbar component

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Navbar />  {/* Using your own Navbar */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
