import React from "react";
import { Layout, theme } from "antd";
import { Routes, Route } from "react-router-dom"; // Chỉ import Routes và Route, không cần Router
import PostList from "../../components/PostList.js";
import PostDetail from "../../components/PostDetail.js";

const { Content } = Layout;

const Home = () => {
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  return (
    <Content
      style={{
        padding: "20px 48px",
      }}
    >
      <div
        style={{
          background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        {/* Chỉ cần các Route bên trong đây */}
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Content>
  );
};

export default Home;
