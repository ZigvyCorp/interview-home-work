import { Avatar, Image, Layout, Menu, Input } from 'antd';
import { Content, Header, Footer } from 'antd/es/layout/layout';
import React from 'react';
import { Outlet, Link} from 'react-router-dom';
import ZigvyLogo from '../images/zigvy-logo.jpg';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { getBlogs } from '../modules/hompage/blogSlice';
const MyLayout = () => {

  const dispatch = useDispatch();
  const onChange = (value) => {
    dispatch(getBlogs({title: value.target.value}))
  }

  return (
    <Layout>
      <Header className='d-flex align-items-center bg-white w-100 row'>
        <div className='d-flex justify-content-start col-8'>
          <Image src={ZigvyLogo} width={50} preview={false}/>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                label: <Link to={'/'}> Blog </Link>
              },
              {
                key: '2',
                label: <Link to={'/users'}> Users </Link>
              },
            ]}
          />
          <div className='ms-5 w-100'>
            <Input placeholder="Search here" prefix={<SearchOutlined />} onChange={onChange} />
          </div>
        </div>
        <div className='d-flex justify-content-end align-items-center col-4'>
          <Avatar shape='square' icon={<UserOutlined/>} />
          <span className='ms-2'>Nguyễn Hồng Ngọc</span>
        </div>
      </Header>
      <Content className='container'>
        <Outlet />
      </Content>
      <Footer className='p-2.5'>© Copyright 2023 by itsmehn</Footer>
    </Layout>);
}

export default MyLayout