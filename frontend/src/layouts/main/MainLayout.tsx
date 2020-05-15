import logo from "@/logo.svg";
import { Layout, Menu, Skeleton } from "antd";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import classes from "./main-layout.module.scss";
import { ProfileMenu } from "./profile-menu";

const { Header, Content } = Layout;

export const MainLayout: React.FC = (props) => {
  return (
    <Layout>
      <Header className={classes.header}>
        <div style={{ display: "flex" }}>
          <div className={classes.logo}>
            <img src={logo} alt="React app" />
            React App
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["/"]}>
            <Menu.Item key="/">
              <Link to="/">Blogs</Link>
            </Menu.Item>
            <Menu.Item key="/blogs/new">
              <Link to="/blogs/new">Create post</Link>
            </Menu.Item>
          </Menu>
        </div>
        <ProfileMenu />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: "100vh" }}
        >
          <Suspense fallback={<Skeleton active />}>{props.children}</Suspense>
        </div>
      </Content>
    </Layout>
  );
};
