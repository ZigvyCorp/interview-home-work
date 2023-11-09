import React from "react";
import { Menu, Dropdown, Avatar } from "antd";

const UserMenu: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="settings">Settings</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <Avatar
          size={32}
          src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=1`}
          alt="User Avatar"
        />
        <span style={{ marginLeft: "8px" }}>User Name</span>
      </div>
    </Dropdown>
  );
};

export default UserMenu;
