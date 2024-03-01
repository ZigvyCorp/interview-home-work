import styled from "styled-components";
import { Avatar, Col, Flex, Row, Space, Input, ConfigProvider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import logoUrl from "assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPostsRequest, selectPosts } from "pages/posts/redux/posts.reducer";
const { Search } = Input;

const HeaderWarpper = styled.header`
  min-height: var(--header-height);
  background: var(--header-color);
  padding: 10px 20px;
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 8px 100px rgba(149, 157, 165, 0.2);
`;

const Logo = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;

  & > img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const Header = () => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { posts } = useSelector(selectPosts);
  const { page = 1, itemsPerPage: limit = 10 } = posts;

  useEffect(() => {
    console.log("dispatch");
    if (search || search === "") {
      dispatch(
        fetchPostsRequest({
          search,
          page,
          limit,
        })
      );
    }
  }, [dispatch, page, limit, search]);

  return (
    <HeaderWarpper>
      <Row>
        <Col span={7}>
          <Flex justify="start" gap="6px" align="center">
            <Logo
              onClick={() => {
                navigate("/");
              }}>
              <img src={logoUrl} alt="logo" />
            </Logo>
            <p className="font-large semi-bold">ZigVy</p>
          </Flex>
        </Col>
        <Col span={10}>
          <ConfigProvider
            theme={{
              token: {
                borderRadius: 50,
              },
            }}>
            <Flex justify="center" gap="middle" align="center" className="h-full">
              <Search placeholder="Search ..." size="large" allowClear onSearch={setSearch} />
            </Flex>
          </ConfigProvider>
        </Col>
        <Col span={7}>
          <Flex justify="end" gap="middle" align="center">
            <Space>
              <Avatar shape="square" size={44} icon={<UserOutlined />} />
              <p>Vo Hieu Thang</p>
            </Space>
          </Flex>
        </Col>
      </Row>
    </HeaderWarpper>
  );
};

export default Header;
