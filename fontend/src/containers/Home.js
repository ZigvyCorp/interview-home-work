import React from "react";
import { Header } from ".";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
}

export default Home;
