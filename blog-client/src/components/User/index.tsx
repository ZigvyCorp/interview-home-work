import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space, Typography } from "antd";

export default function User() {
  return (
    <Space style={{ padding: "0 10px" }}>
      <Badge count={0}>
        <Avatar shape="square" icon={<UserOutlined />} size={"large"} />
      </Badge>
      <Typography.Title level={5} style={{ margin: 0 }}>
        Croissain
      </Typography.Title>
    </Space>
  );
}
