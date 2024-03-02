import { BlockOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { GetProp, MenuProps } from "antd";

type MenuItem = GetProp<MenuProps, "items">[number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items = [
  getItem("Home", "/", <HomeOutlined />),
  getItem("Blog", "/blog", <BlockOutlined />),
];
const MenuSide = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <React.Fragment>
      <Menu
        defaultSelectedKeys={[`${location.pathname}`]}
        onClick={(e) => {
          navigate(`${e.key}`);
        }}
        mode="horizontal"
        style={{
          flex: 1,
          minWidth: 0,
          textAlign: "center",
        }}
        items={items}
      />
    </React.Fragment>
  );
};

export default MenuSide;
