import React from "react";
import { Logo } from "./Logo";
import { Avatar } from "antd";
import { SearchBar } from "./SearchBar";

export const Header: React.FC = () => {
  return (
    <header className=' bg-white shadow-lg sticky top-0 left-0 w-full z-10'>
      <div className='container_app'>
        <div className='flex justify-between items-center h-20'>
          <div>
            <Logo />
          </div>
          <div>
            <SearchBar />
          </div>
          <div className='flex items-center space-x-3'>
            <Avatar style={{ backgroundColor: "#f56a00" }}>D</Avatar>
            <p className='font-semibold'>Duy Nguyen</p>
          </div>
        </div>
      </div>
    </header>
  );
};
