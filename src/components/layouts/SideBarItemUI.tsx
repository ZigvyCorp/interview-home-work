import React from "react";

export interface ISideBarItemUI {
  className?: string;
  label: string;
}

const SideBarItemUI = ({ className = "", label }: ISideBarItemUI) => {
  return <div className={`${className}`}>{label}</div>;
};

export default SideBarItemUI;
