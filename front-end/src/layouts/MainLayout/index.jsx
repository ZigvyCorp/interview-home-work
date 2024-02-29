import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderCustom from "../../components/HeaderCustom";

const MainLayout = () => {
  return (
    <Layout>
      <HeaderCustom />
      <Outlet />
    </Layout>
  );
};

export default MainLayout;
