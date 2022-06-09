import { ArrowUpOutlined } from "@ant-design/icons";
import { BackTop } from "antd";
import React from "react";
import PostList from "../features/post";
import MainHeader from "../layouts/MainHeader";

const HomePage = () => {
  return (
    <>
      <MainHeader />
      <div style={{ margin: "7rem auto", maxWidth: "800px" }}>
        <PostList />
      </div>
      <BackTop>
        <div
          style={{
            background: "#dfe4ea",
            borderRadius: 4,
            padding: "1rem",
            fontSize: 14,
          }}
        >
          <ArrowUpOutlined />
        </div>
      </BackTop>
    </>
  );
};

export default HomePage;
