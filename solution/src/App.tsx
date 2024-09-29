import React from 'react';
import { Layout, Menu, Space } from 'antd';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import blogIcon from './svg/blog-icon.svg';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header className="header">
          <div>
            <Link to="/">
              <img src={blogIcon} alt="Blog Logo" className="blog-logo" />
            </Link>
          </div>
          <Space direction='horizontal'>
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User Avatar"
              className="user-avatar"
            />
            <span style={{ color: 'white', marginRight: '20px' }}>John Doe</span>
          </Space>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: '20px' }}>
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post/:id" element={<PostDetailPage />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Blog ©2024 Created by Minh Quoc</Footer>
      </Layout>
    </Router>
  );
}

export default App;