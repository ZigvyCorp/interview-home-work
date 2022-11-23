import React, { useState, useEffect } from "react";
import { Layout, Space, Avatar} from "antd";
import { UserOutlined } from "@ant-design/icons";

import axios from "axios";
import Posts from "./components/Posts";

const { Header, Content, Footer } = Layout;


const postsURL = "https://jsonplaceholder.typicode.com/posts";

const getUsers = async (userid) => {
  const usersURL = "https://jsonplaceholder.typicode.com/users/" + userid;
  return axios.get(usersURL).then((res) => {
    return res.data;
  });
};

const getComments = async (postid) => {
  const commentsURL =
    "https://jsonplaceholder.typicode.com/comments?postId=" + postid;
  return axios.get(commentsURL).then((res) => {
    return res.data;
  });
};

const getPosts = async () => {
  return axios.get(postsURL).then((res) => {
    return res.data;
  });
};



function App() {
  const [posts, setPosts] = useState([]);


  const getData = async () => {
    const postsData = await getPosts();

    const result = await Promise.all(
      postsData.map(async (post) => {
        const user = await getUsers(post.userId);
        const comments = await getComments(post.id);
        return { ...post, user, comments };
      })
    );
    setPosts(result);
  };

  useEffect(() => {
    getData();
  }, []);



  return (
    <>
      <Layout>
        <Header>
          <div className="header">
            <div className="logo">
              <h4>LOGO</h4>
            </div>
            <div className="blog">
              <h3>BLOGS</h3>
            </div>
            <div className="user">
              <Space>
                <div className="avatar">
                  <Avatar
                    style={{ backgroundColor: "#eeee" }}
                    shape="square"
                    size="large"
                    icon={<UserOutlined />}
                  />
                </div>
                <span>Adam Levine</span>
              </Space>
            </div>
          </div>
        </Header>
        <Content style={{ padding: "0 50px" }}>

          {posts.map((post) => (
            <Posts
              key={post.id}
              title={post.title}
              body={post.body}
              author={post.user.name}
              comments={post.comments}
            />
          ))}

        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}

export default App;
