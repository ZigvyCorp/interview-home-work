import React from 'react'
import { Layout } from 'antd';
import Navbar from './Navbar';
import Post from './Post';

const { Header, Content } = Layout;

const Home = () => {
  return (
    <div>
      <Layout>
        <Header>
          <Navbar/>
        </Header>
        <Content>
          <Post/>
        </Content>
      </Layout>    
    </div>
  )
}

export default Home