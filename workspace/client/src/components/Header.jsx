import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Layout>
      <Header className="p-0 bg-white">
        <span className="text-left text-[#1890ff] text-2xl font-bold mx-2">
          <Link to="/">My App</Link>
        </span>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          style={{ lineHeight: "64px", float: "right" }}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="profile" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default AppHeader;
