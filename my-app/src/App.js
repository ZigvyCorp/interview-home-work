import React, { useEffect, useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import axios from "axios"
import { Pagination } from 'antd';

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: 1,
    label: `Logo`,
  },
  {
    key: 1,
    label: `Blog`,
  },
  {
    key: 1,
    label: `Adam Levine`,
  }
]



const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setPosts(data.data)
  }
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      {
        posts && posts.map((item) => (
          <Content style={{ padding: '0 48px', border: "1px solid black" }}>

            <div
              style={{
                background: colorBgContainer,
                minHeight: 280,
                padding: 24,
                borderRadius: borderRadiusLG,
              }}
            >  <h3>
                {item.title}
              </h3>
              <div> Author: {item.author}</div>
              <div> Created Date: {new Date(8.64e15).toString()}</div>
              <div> Content: {item.body}</div>
            </div>
          </Content>
        ))}
      <Pagination defaultCurrent={1} total={50} />
      <Footer style={{ textAlign: 'center' }}>
      </Footer>
    </Layout>
  );
};

export default App;