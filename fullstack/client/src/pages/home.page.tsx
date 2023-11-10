import React from "react";
import { Helmet } from "react-helmet-async";
import PostCard from "../components/card";
import { Space } from "antd";

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Fullstack assignment</title>
      </Helmet>
      <Space direction="vertical" size="middle">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Space>
    </>
  );
};

export default HomePage;
