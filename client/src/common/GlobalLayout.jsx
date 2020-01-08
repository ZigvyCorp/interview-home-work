import React from 'react'
import { Layout, Menu, Icon, Breadcrumb, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'

import './GlobalLayout.css'
const { SubMenu } = Menu

const { Header, Content, Footer, Sider } = Layout

const UserMenu = (
  <Menu>
    <Menu.Item key='1'>
      <Icon type='user' />
      1st menu item
    </Menu.Item>
    <Menu.Item key='2'>
      <Icon type='user' />
      2nd menu item
    </Menu.Item>
    <Menu.Item key='3'>
      <Icon type='user' />
      3rd item
    </Menu.Item>
  </Menu>
)

const GlobalLayOut = props => {
  return (
    <Layout className='layout'>
      <Header className='header'>
        <Row>
          <Col span={20}>
            <div className='logo' />
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
              <Menu.Item key='1'>
                Home
                <Link to={`/posts`}></Link>
              </Menu.Item>
              <Menu.Item key='2'>
                New Post
                <Link to={`/writer`}></Link>
              </Menu.Item>
              <Menu.Item key='3'>nav 3</Menu.Item>
            </Menu>
          </Col>
          <Col span={4}>
            <Dropdown.Button type='link' overlay={UserMenu} icon={<Icon type='user' />}>
              Ted Mosby
            </Dropdown.Button>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key='sub1'
              title={
                <span>
                  <Icon type='user' />
                  2019
                </span>
              }
            >
              <Menu.Item key='1'>Công nghệ </Menu.Item>
              <Menu.Item key='2'>Văn hoá</Menu.Item>
              <Menu.Item key='3'>Nghệ thuật</Menu.Item>
              <Menu.Item key='4'>Ẩm thực</Menu.Item>
            </SubMenu>
            <SubMenu
              key='sub2'
              title={
                <span>
                  <Icon type='laptop' />
                  2018
                </span>
              }
            ></SubMenu>
            <SubMenu
              key='sub3'
              title={
                <span>
                  <Icon type='notification' />
                  2017
                </span>
              }
            >
              <Menu.Item key='9'>option9</Menu.Item>
              <Menu.Item key='10'>option10</Menu.Item>
              <Menu.Item key='11'>option11</Menu.Item>
              <Menu.Item key='12'>option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default GlobalLayOut
