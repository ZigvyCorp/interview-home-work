import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "../header/header.container";
import Main from "../main/main.container";
const AppLayout = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Layout>
  );
};
export default AppLayout;
