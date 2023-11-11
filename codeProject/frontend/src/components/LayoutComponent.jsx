import React, { useState, useEffect } from "react";

const { Header, Content, Footer } = Layout;
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  LoginOutlined,
  UserAddOutlined,
  PlusOutlined,
} from "@ant-design/icons";
const LayoutComponent = ({ children }) => {
  let navigate = useNavigate();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem("token");
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, [localStorage.getItem("token")]);
  console.log("children", loggedIn);

  const handleLogout = () => {
    // Logout logic, clear local storage and set loggedIn to false
    localStorage.removeItem("token");
    navigate("/login");
    setLoggedIn(false);
  };
  return (
    <Layout className="layout">
      <Header style={{ backgroundColor: "white" }}>
        <Menu
          mode="horizontal"
          style={{
            height: "50px",
            display: "flex",
          }}
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key="0" className="logo">
            <Link to="/">Logo</Link>
          </Menu.Item>
          <Menu.Item key="/" style={{ marginLeft: "800px" }}>
            <Link to="/">Blogs</Link>
          </Menu.Item>
          {!loggedIn && (
            <>
              <Menu.Item key="/login" style={{ marginLeft: "600px" }}>
                <Link to="/login">
                  <LoginOutlined /> Login
                </Link>
              </Menu.Item>
              <Menu.Item key="/register">
                <Link to="/register">
                  <UserAddOutlined /> Register
                </Link>
              </Menu.Item>
            </>
          )}
          {loggedIn && (
            <>
              <Menu.Item key="/create-post" style={{ marginLeft: "600px" }}>
                <Link to="/create-post">
                  <PlusOutlined /> Create Post
                </Link>
              </Menu.Item>
              <Menu.Item key="/profile">
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="" onClick={() => handleLogout()}>
                Logout
              </Menu.Item>
            </>
          )}
        </Menu>
      </Header>

      <div className="site-layout-content">
        <main style={{ minHeight: "calc(100vh - 64px - 170px)" }}>
          {children}
        </main>
      </div>
      <Footer style={{ textAlign: "center" }}>
        My Blog ©{new Date().getFullYear()} Created by You
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
