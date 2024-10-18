import { Layout, Input, Flex, Pagination } from "antd";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const PageLayout = (prop: { children: JSX.Element }) => {
  return (
    <>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <Search style={{ width: "20%" }} placeholder="Search something..." />
        </Header>
        <Content
          style={{
            padding: "10px 30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {prop.children}
        </Content>
        <Flex align="center" justify="center">
          <Pagination defaultCurrent={1} total={100} />
        </Flex>
        <Footer style={{ textAlign: "center" }}>Nguyen Thanh Long ©2023</Footer>
      </Layout>
    </>
  );
};

export default PageLayout;
