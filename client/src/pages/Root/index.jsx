import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
export default function Root() {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
}
