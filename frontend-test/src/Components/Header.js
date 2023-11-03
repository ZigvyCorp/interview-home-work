import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

const Header = () => {
  return (
    <div>
      <nav className="bg-blue-500 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center font-semibold whitespace-nowrap text-white text-3xl">
              Zigvy
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <Space wrap size={16}>
              <Avatar
                size="large"
                icon={<UserOutlined />}
                className="bg-black"
              />
              <span className="text-lg text-white">Trung Dev</span>
            </Space>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <div className="bg-violet-500 px-8 py-2 rounded-lg">
              <h1 className="text-2xl text-white">Blogs</h1>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
