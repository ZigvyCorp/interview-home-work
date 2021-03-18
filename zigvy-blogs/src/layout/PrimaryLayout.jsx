import React from 'react';
import { Layout } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
import { HeaderContainer } from '../containers';
import Routes from '../Routes';

const { Header } = Layout

const layoutStyle = {
  position: 'absolute',
  width: '100%',
  minHeight: '101%',
}

const headerStyle = {
  background: '#fff',
  overflow: 'hidden',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 100,
  boxShadow: 'rgb(0 0 0 / 16%) 0px 0px 2px, rgb(0 0 0 / 23%) 0px 3px 6px'
}

const PrimaryLayout = () => (
  <Layout style={layoutStyle}>
    <Router>
      <Header style={headerStyle} >
        <HeaderContainer />
      </Header>
      <Layout style={{ marginTop: '64px' }}>
        <Routes />
      </Layout>
    </Router>
  </Layout>
)

export default PrimaryLayout