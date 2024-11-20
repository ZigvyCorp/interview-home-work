import React from "react";
import { Layout, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const HeaderPage = () => {
  return (
    <>
      <Header style={headerStyle}>Blog content</Header>
    </>
  );
};

export default HeaderPage;
