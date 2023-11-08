import React, { useEffect, useState } from "react";

import { SideBar } from "@/modules/layouts";

import { SIDEBAR_ITEMS } from "@/modules/layouts";

export interface IAdminLayout {
  children?: React.ReactNode;
}

const AdminLayout = ({ children }: IAdminLayout) => {
  // mark width 850

  const [demension, setDemension] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setDemension(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // console.log("dem", demension);

  return (
    <div
      className={`min-h-screen bg-bg_grey flex transition-all duration-150 delay-75 ease-linear ${
        demension.width > 1000 ? "pl-[var(--sidebar-width)]" : "pl-0"
      }`}
    >
      <SideBar show={demension.width > 1000}>
        <div className="space-y-[12px]">
          {SIDEBAR_ITEMS.map((item, index) => {
            return (
              <SideBar.Item key={index} label={item.label} children={item.children} icon={item.icon} herf={item.herf} />
            );
          })}
        </div>
      </SideBar>

      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
