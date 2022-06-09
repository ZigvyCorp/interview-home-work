import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

const MainHeader = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "2rem",
          fontWeight: "500",
          padding: "1rem 3rem",
          background: "#dfe4ea",
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "10",
        }}
      >
        <div>LOGO</div>
        <div style={{ color: "red" }}>BLOGS</div>
        <div>
          <Avatar size={64} icon={<UserOutlined />} />
          Leanne Graham
        </div>
      </div>
    </>
  );
};

export default MainHeader;
