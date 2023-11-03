import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Flex, FloatButton, Layout, Row, Typography } from "antd";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import SearchInput from "../../components/SearchInput";
import { myLinkedin } from "../../constants/contact.constants";
import { useResponsiveBreakpoints } from "../../hooks/useResponsiveBreakpoints ";
import { selectPosts } from "../../redux-saga/slices/posts.slice";
import { theme } from "../../styled/theme/globalTheme";

const { Header, Content, Footer } = Layout;
const { Text, Link } = Typography;

const BaseLayout = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsiveBreakpoints();
  const { posts } = useSelector(selectPosts);
  const [searchValue, setSearchValue] = useState<string | number | undefined>();

  const convertToOptions = useMemo(() => {
    return posts.map((post) => ({
      value: post.id,
      label: (
        <Link target='_blank' href={`/post/${post.id}`}>
          <Text ellipsis style={{ marginBottom: 0, display: "block", fontWeight: theme.fontWeights.semiBold }}>
            {post.title}
          </Text>
          <Text ellipsis style={{ marginBottom: 0, display: "block" }}>
            {post.body}
          </Text>
        </Link>
      ),
      title: post.title,
    }));
  }, [posts]);

  return (
    <Layout>
      <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
        <Row gutter={16}>
          <Col
            xs={{
              span: 12,
            }}
            lg={{
              span: 4,
            }}
          >
            <Button
              type='text'
              block
              style={{
                color: theme.colors.white,
                fontSize: isMobile ? theme.fontSizes.md : theme.fontSizes.lg,
                fontWeight: theme.fontWeights.bold,
              }}
              onClick={() => navigate("/")}
            >
              ZigvyCorpBlog
            </Button>
          </Col>
          <Col
            xs={{
              span: 24,
              offset: 0,
              order: 3,
            }}
            lg={{
              span: 6,
              order: 2,
              offset: 5,
            }}
            offset={5}
          >
            <SearchInput
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              style={{ width: "100%" }}
              options={convertToOptions}
              placeholder="Search post's title"
            />
          </Col>
          <Col
            xs={{
              span: 12,
              offset: 0,
            }}
            lg={{
              span: 4,
              offset: 4,
              order: 3,
            }}
          >
            <Link href={myLinkedin} target='_blank' rel='noopener noreferrer'>
              <Flex align='center' style={{ height: "100%", width: "100%" }} gap={12}>
                <Avatar
                  style={{
                    borderColor: theme.colors.white,
                  }}
                  size={isMobile ? "default" : "large"}
                  shape='square'
                  icon={<UserOutlined />}
                />
                <Text
                  style={{
                    color: theme.colors.white,
                    fontSize: isMobile ? theme.fontSizes.sm : theme.fontSizes.md,
                    fontWeight: theme.fontWeights.bold,
                  }}
                >
                  Trong Quy
                </Text>
              </Flex>
            </Link>
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          paddingTop: isMobile ? "2rem" : "0",
        }}
      >
        <Outlet />
      </Content>
      <FloatButton.BackTop visibilityHeight={0} />
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: theme.colors.black,
          color: theme.colors.white,
          fontWeight: theme.fontWeights.semiBold,
        }}
      >
        Create By Nguyen Trong Quy
      </Footer>
    </Layout>
  );
};

export default BaseLayout;
