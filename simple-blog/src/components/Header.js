import React from "react";
import { Layout, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import SearchBar from "./SearchBar";

const { Header } = Layout;

const MyHeader = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        className="logo"
        style={{
          width: "120px",
          height: "40px",
          background: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="https://vanphongxanh.vn/wp-content/uploads/2022/03/logo-social.png"
        />
      </div>
      <span style={{ color: "white", fontSize: "18px" }}>My blog</span>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: "white", marginRight: "24px" }}>
          <Avatar size="small" icon={<UserOutlined />} />
          <span style={{ marginLeft: "8px" }}>User</span>
        </div>
      </div>
    </Header>
  );
};

export default MyHeader;
