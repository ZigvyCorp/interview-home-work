import { Avatar, Flex } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/path";
import { UserOutlined } from "@ant-design/icons";

const HeaderCustom = () => {
  return (
    <Header style={{ backgroundColor: "#fff" }}>
      <Flex justify="space-between">
        <Link to={PATHS.HOME} className="logo">
          <img alt="Logo" srcSet="/img/blogger.png 2x" />
        </Link>
        <Link to={PATHS.HOME} className="blogs-link">
          Blogs
        </Link>
        <div className="user">
          <Avatar icon={<UserOutlined />} shape="square" />
          <span className="">Nam Nguyen</span>
        </div>
      </Flex>
    </Header>
  );
};

export default HeaderCustom;
