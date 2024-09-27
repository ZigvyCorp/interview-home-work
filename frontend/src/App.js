import React from "react";
import { Layout, theme } from "antd";
import { Avatar, Space, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="/">
          <HomeOutlined
            style={{
              color: "white",
              fontSize: "32px",
              display: "flex",
              alignItems: "center",
            }}
          />
        </a>
        <Image
          width={32}
          preview={false}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />

        <Space wrap size={16}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Space>
      </Header>
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
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Router>
                <Routes>
                  <Route path="/" element={<PostList />} />
                  <Route path="/posts/:id" element={<PostDetail />} />
                </Routes>
              </Router>
            </PersistGate>
          </Provider>{" "}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Zigvy interview home work ©{new Date().getFullYear()} Created by PLHHao
      </Footer>
    </Layout>
  );
};
export default App;
