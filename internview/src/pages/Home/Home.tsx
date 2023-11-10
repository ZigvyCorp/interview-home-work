import { Avatar, Flex, Image, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import PostPreview from "./Components/PostPreview";
import { useDispatch, useSelector } from "react-redux";
import { Post, fetchPostsRequest } from "../../actions";

const { Title } = Typography;

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.data);
  const error = useSelector((state: any) => state.error);
  const [currenPage, setCurrentPage] = useState(2);
  const [dataPosts, setDataPosts] = useState(posts.slice(0, 10));

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setDataPosts(posts.slice(0, currenPage * 10));
      setCurrentPage(currenPage + 1);
    }
  };

  useEffect(() => {
    dispatch(fetchPostsRequest());
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "between",
          width: "100%",
        }}
      >
        <Flex
          style={{
            width: "100%",
          }}
          justify={"space-between"}
          align={"center"}
        >
          <Image
            width={50}
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAACysrJRUVEyMjLX19eYmJi3t7c9PT1XV1dbW1v8/PzCwsLq6ur29vYvLy8jIyPMzMwZGRnIyMjR0dEbGxs2Njbj4+MqKiqpqamPj48WFhbw8PCfn58wMDDb29tvb288XUOwAAADm0lEQVR4nO2d7VLbMBBFpRAKpWmhEJLw0abv/5StU0cFR46Erbu7Uu/5zTA+2Ltn7CGxc4QQQgghhBBCCCGEEEIIIYQQQggh5L9nvd5qHwKWT94/ax8DlD+C/kn7IJB0gjdftI8CSCf4GfGLrfzRDoKYg9kuNLiSE3QLr8HrqeANxs+5KwW/3deIIGxeFAxvI4IXKD8Nw7uIIGoGVQxfIjOIFBQ3vJNcMhqGsRmEhF7LMLZFoZeotKH4DEob3n87FcTOoLChbOgVDIVDL28oHXpxQ5UlI2koH3phQ4XQyxpqhF7UMGcG9zUb5oT+4aViw11syQzO4Mpf12uYE/qVr9gwJ/QPvmLDnCXTCQINsU8Tc0J/EAQavl5OZv8jJZgT+pUHG87gMiWYE/pe0KThOiV4nzuDRg2/pwQfc0IfftqeYVIwL/R2DZOCmaE3a5icwdzQWzUsu2QMGiYv0fzQ2zScNIMjoTdpmLxEPxJ6i4aAGbRlWDj09gxLh96cYfHQWzMsH3pjhqAlY8cQEXpThpDQWzLEhN6QIXIGTRiiQm/GEBZ6K4a40BsxBIbehiF6yagbQkMfkPi/kxGwoQ+/ZLCKBUlv0Vmh71kOLgNBRGbQ9BmcG/oDG8OCs0PfsTQsOD/0uoISobctWGTJWL5Ei4Te8pKpPfTgO/oehh4HQ8/QO9uCzYc+eQYZelf5kmHoHUPP0CNh6Bl6V3kHGXpX+ZJpPvRRwY9u0U3rof+pJ8jQM/TOtuA+dWy1hz752bXaQ5/8/GHtoXcpw9pD33HWsEzodQXPGpa5o9cL/V/OGNYe+p5xw9pDf2TUsPbQB8YMc0JfheCY4WP1oQ/EDXNCbz4TPVHDFkIfiBk2EfpAxLCN0AdODRsJfeDEsJXQB4aGzYQ+MDBsJ/SB94b139Gf8s6wpdAH3ho2FfrAG8O2Qh/4Z9hY6APBsLXQB46GRUJvUfBoWCT01xYFe8Mij+79brOcyi3u20wPhkXu6OeB/VbBIo/uLRsWCb1lwyKhN2y4iL3zRXgGsYYrAzOINRwwKfQ1GU4KfU2GSjMoZ6goKGOotWTEDFVCL2moE3pBQ80ZFDFUnUEJQ7XQSxnqhV7IUHnJ4A21lwzccNKj+5oMdUMvYGhhBqGGVgT9Big4nMHt8kKBX0BBK691RiD19jo1RN+cpcG6dcHuoyRCb6/TYvv81PQZJIQQQgghhBBCCCGEEEIIIYQQQgghWfwGVThhCxjrJKUAAAAASUVORK5CYII="
            }
          />
          <Title level={2} style={{ color: "white" }}>
            Blog
          </Title>
          <Avatar size={64} icon={<UserOutlined />} />
        </Flex>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        {!error &&
          dataPosts.map((post: Post, idx: number) => (
            <div key={idx}>
              <PostPreview post={post} />
            </div>
          ))}
      </Content>
      {/* <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

export default Home;
