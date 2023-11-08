import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import * as SideBarIcon from "@/components/icons/SideBar";
import { DownOutlined } from "@ant-design/icons";

export interface ISideBarItem {
  className?: string;
  herf?: string;
  label: string;
  permission?: Array<string>;
  icon?: string;
  children?: Array<{
    className?: string;
    label: string;
    herf: string;
    permission?: Array<string>;
  }>;
}

const SidebarItem = ({ className = "", herf, permission, icon, label, children }: ISideBarItem) => {
  const location = useLocation();
  const Icon = icon ? SideBarIcon[icon as keyof typeof SideBarIcon] : undefined;
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  // console.log(params);

  return (
    <div className={`${className} text-[1.4rem]`}>
      {/* {herf ? (
        <Link to={herf} className="flex">
          <SideBarItemUI label={label} />
        </Link>
      ) : (
        <div>
          <button className="flex w-full">
            <SideBarItemUI label={label} />
          </button>
          {children && (
            <div className="flex flex-col space-y-[10px] pt-[10px]">
              {children.map((item, index) => {
                return (
                  <Link key={index} to={item.herf}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )} */}

      {children ? (
        <div className="toggle">
          <button
            className={`flex w-full justify-between items-center relative p-[12px] rounded-lg ${
              children.find((item) => item.herf === location.pathname)
                ? "text-black font-medium bg-white before:block before:rounded-lg before:content-[''] before:absolute before:w-[3px] before:h-[55%] before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-main"
                : "text-black2"
            }`}
            onClick={handleToggle}
          >
            <div className={`flex w-[90%] space-x-[10px] relative`}>
              {Icon && <Icon className={location.pathname === herf ? "text-black font-medium" : "text-black2"} />}
              <span>{label}</span>
            </div>
            <div className="w-[10%] h-full flex justify-center items-center">
              <DownOutlined
                className={`w-[14px] h-[14px] text-[1.6rem] text-black2 transition-transform duration-100 ease-linear ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>
          {children && (
            <div
              className={`transition-all duration-150 ease-linear origin-top ${
                open ? "h-auto opacity-100 scale-y-100" : "h-0 overflow-hidden opacity-0 scale-y-0"
              }`}
            >
              {children.map((item, index) => {
                // const Icon = icon ? SideBarIcon[icon as keyof typeof SideBarIcon] : undefined;
                return (
                  <Link key={index} to={item.herf || "*"}>
                    <div
                      className={`flex p-[12px] rounded-lg space-x-[10px] pl-[40px] relative ${
                        location.pathname === item.herf
                          ? "text-black font-medium bg-white before:block before:rounded-lg before:content-[''] before:absolute before:w-[3px] before:h-[55%] before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-main"
                          : "text-black2"
                      }`}
                    >
                      <span>{item.label}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <Link to={herf || "*"}>
          <div
            className={`flex p-[12px] rounded-lg space-x-[10px] relative ${
              location.pathname === herf
                ? "text-black font-medium bg-white before:block before:rounded-lg before:content-[''] before:absolute before:w-[3px] before:h-[55%] before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-main"
                : "text-black2"
            }`}
          >
            {Icon && <Icon className={location.pathname === herf ? "text-black font-medium" : "text-black2"} />}
            <span>{label}</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default SidebarItem;
