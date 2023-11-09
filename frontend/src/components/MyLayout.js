import { CalendarOutlined, TableOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import Menu from 'antd/es/menu/menu';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return <Layout>
    <Layout>
      <Content className='p-2.5'>
        <Outlet />
      </Content>

      <Footer className='p-2.5'>© Copyright 2023 by itsmehn</Footer>
    </Layout>
  </Layout>
}

export default MyLayout