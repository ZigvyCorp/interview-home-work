import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="p-5">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
