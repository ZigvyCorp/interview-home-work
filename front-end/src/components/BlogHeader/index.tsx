import React from "react";

import { Header } from "antd/es/layout/layout";

import { Flex, Typography, theme } from "antd";

import { HighlightOutlined } from "@ant-design/icons";

function BlogHeader() {
  const { token } = theme.useToken();
  return (
    <Header
      style={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        minWidth: token.screenLG,
      }}
    >
      <Flex
        style={{
          border: "1px solid #f0f0f0",
          padding: "8px 12px",
          borderRadius: "6px",
        }}
        justify="space-between"
        align="center"
      >
        <Typography.Title
          level={3}
          style={{
            margin: 0,
          }}
        >
          <HighlightOutlined />
        </Typography.Title>
        <Typography.Title
          level={5}
          style={{
            margin: 0,
          }}
        >
          Blogs
        </Typography.Title>
        <Typography.Title
          level={5}
          style={{
            margin: 0,
          }}
        >
          Adam Levine
        </Typography.Title>
      </Flex>
    </Header>
  );
}

export default BlogHeader;
