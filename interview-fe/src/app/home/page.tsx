"use client";

import {
  Button,
  Collapse,
  CollapseProps,
  Divider,
  Flex,
  Layout,
  Typography,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { Post } from "@/types/post";
import { PostsApi } from "@/api/posts";

export default function HomePage() {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const { isAuthenticated, user, signOut } = useAuth();

  const router = useRouter();

  const [listPosts, setListPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!isAuthenticated) {
        router.push("/");
      } else {
        try {
          const posts = await PostsApi.getPosts(new FormData());
          setListPosts(posts);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      }
    };

    fetchPosts();
  }, [isAuthenticated, router, user]);

  const { Title, Text } = Typography;

  return (
    <>
      <Layout>
        <Header style={headerStyle}>
          <div>Logo</div>
          <div>Blog App</div>
          <div>{user?.name}</div>
          <Button type="primary" onClick={() => signOut()}>
            Đăng xuất
          </Button>
        </Header>
        <Content>
          <Flex vertical>
            {listPosts.map((item: Post) => {
              const items: CollapseProps["items"] = item.listComments.map(
                (subItem, index) => {
                  return {
                    key: `${index}`,
                    label: `${subItem.name}`,
                    children: <p>{subItem.body}</p>,
                  };
                }
              );

              return (
                <>
                  <Flex vertical align="center">
                    <Title>{"Post Title: " + item.title}</Title>
                    <Flex>
                      <Text>{item.body}</Text>
                    </Flex>
                    <Flex vertical>
                      <Text>{item.listComments.length + " replies"}</Text>
                      <Collapse accordion items={items} />
                    </Flex>
                  </Flex>
                  <Divider />
                </>
              );
            })}
          </Flex>
        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
}
