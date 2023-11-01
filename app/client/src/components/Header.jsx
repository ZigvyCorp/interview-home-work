import { UserOutlined } from "@ant-design/icons";
import { Avatar, Layout } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="flex justify-between">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="font-bold mr-5 text-[18px] text-orange-300">Zigvy Corp</div>
        <NavLink to="/" className={({ isActive }) => (isActive ? "bg-green-300 px-10 text-white hover:text-white font-bold" : "text-white font-bold px-10")}>
          Posts
        </NavLink>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar size={40} icon={<UserOutlined className="text-black" />} className="mx-3 bg-white" />
        <span className="text-white font-bold">Viet Nguyen</span>
      </div>
    </Header>
  );
};

export default AppHeader;
