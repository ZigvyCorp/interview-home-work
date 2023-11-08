import React, { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import {
  Dropdown,
  Flex,
  Image,
  Layout,
  Menu,
  MenuProps,
  Space,
  theme,
} from "antd";
import { Link, Route, Routes, redirect, useLocation } from "react-router-dom";
import { routes } from "../configs/routes";

const { Header, Content, Footer } = Layout;

const LayoutContainer: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();
  useEffect(() => {
    const r = routes.map((route) => route.path);
    if (!r.includes(location.pathname)) {
      redirect("/post");
    }
  }, [location.pathname]);

  const renderMenu = () => {
    return routes
      .filter((r) => r.sidebar)
      .map((r) => {
        const Icon = r.icon;
        return (
          <Link key={r.name} to={r.path}>
            <span style={{ marginRight: "8px" }}>{Icon && <Icon />}</span>
            {r.name}
          </Link>
        );
      });
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Logout
        </a>
      ),
    },
  ];

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "none",
        }}
      >
        <img
          src="/images/zigvy-logo.svg"
          alt="Logo"
          style={{ marginRight: "16px" }}
        />
        <Flex>{renderMenu()}</Flex>
        <Flex flex={1} justify="end">
          <Dropdown menu={{ items }} placement="bottomLeft" trigger={["click"]}>
            <Space style={{ cursor: "pointer" }}>
              <UserOutlined size={32} color="#FFF" />
              <div>Username</div>
            </Space>
          </Dropdown>
        </Flex>
      </Header>
      <Content style={{ padding: "20px" }}>
        <div className="site-layout-content">
          <Routes>
            {routes.map((r) => {
              const Component = r.component;
              return (
                <Route key={r.name} path={r.path} element={<Component />} />
              );
            })}
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export { LayoutContainer };
