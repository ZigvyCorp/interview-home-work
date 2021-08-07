import React from "react";
import "./Navigation.css";
import logo from "../images/logo.png";
import { Typography, Space, Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
const {Link } = Typography;

export default function Navigation() {
  return (
    <Space className="Navigation" size={8}>
        <img className="logo" src={logo} alt="logo" />
        <Link href="#" style={{color: "white", fontSize: "2.5rem", margin: "0 11rem", fontFamily: "Jost-Bold"}}>
          BLOGS
        </Link>
        <Avatar style={{ backgroundColor: 'white', color: "green", marginLeft: "13.6rem"}} size= "large" icon={<UserOutlined />} />
        <Link href="#" style={{color: "white", fontSize: "1.5rem",fontFamily: "Jost-Bold" }}>Phuong</Link>
    </Space>
  );
}
