import React from "react";
import { Layout, Avatar, Space, Image, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import blogLogo from "../assets/blogLogo.svg";

const { Header } = Layout;

const HeaderHome = () => {
  const nameUser = localStorage.getItem("user");
  const username = nameUser ? JSON.parse(nameUser).username : "Guest";

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    // Optionally redirect the user to the login page or home page
    window.location.href = '/login'; // Change to your login route
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <span onClick={handleLogout}>Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        background: "#0060bc",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a href="/">
        <Image
          src={blogLogo}
          style={{ filter: "invert(1)" }}
          alt="Blog Logo"
          width={50}
          height={50}
          preview={false}
        />
      </a>

      <h2 style={{ color: 'white' }}>Blogs</h2>

      <Space wrap size={16}>
        <Dropdown overlay={menu} trigger={['click']}>
          <Avatar size="large" icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
        </Dropdown>
        <h4 style={{ color: 'white' }}>{username}</h4>
      </Space>
    </Header>
  );
};

export default HeaderHome;
