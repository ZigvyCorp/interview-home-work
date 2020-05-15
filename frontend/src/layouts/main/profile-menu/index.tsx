import defaultAvatar from "@/assets/img/default-avatar.jpg";
import { useAuth } from "@/HOCs/auth-provider";
import { LogoutOutlined, ProfileOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu, Skeleton } from "antd";
import React from "react";

const DropdownMenu: React.FC = (props) => {
  const { user, logout } = useAuth();
  return (
    <Menu>
      <Menu.Item key="0" icon={<ProfileOutlined />}>
        {user?.firstName} {user?.lastName}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" icon={<LogoutOutlined />} onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );
};

export const ProfileMenu: React.FC = () => {
  const { loading, user } = useAuth();
  if (!loading && !user) return null;
  return (
    <div style={{ height: "100%", cursor: "pointer" }}>
      {loading ? (
        <Skeleton active loading={true} paragraph={false} title avatar />
      ) : (
        <Dropdown overlay={<DropdownMenu />} trigger={["click"]}>
          <Avatar src={user?.avatar || defaultAvatar} />
        </Dropdown>
      )}
    </div>
  );
};
