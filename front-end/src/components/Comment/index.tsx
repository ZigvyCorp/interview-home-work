import React from "react";

import { Button, Flex, Typography, Space, Avatar } from "antd";

import { UserOutlined } from "@ant-design/icons";

import Paragraph from "antd/es/typography/Paragraph";

function Comment() {
  return (
    <Flex gap={"middle"} justify="flex-start" style={{ marginBottom: "12px" }}>
      <Avatar
        icon={<UserOutlined />}
        size={{ xs: 16, sm: 16, md: 24, lg: 32, xl: 40, xxl: 40 }}
        style={{
          marginTop: "6px",
        }}
      />
      <Space direction="vertical" size={"small"}>
        <Flex gap={"small"} align="center">
          <Typography>Han Solo</Typography>
          <Typography>a day ago</Typography>
        </Flex>
        <Paragraph style={{ margin: 0 }}>Boring!!!</Paragraph>
        <Button>Reply to</Button>
      </Space>
    </Flex>
  );
}

export default Comment;
