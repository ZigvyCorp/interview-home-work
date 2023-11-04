import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './header';
import { HEADER } from '../configs/app';

const { Content } = Layout;

export default function AppLayout() {
  return (
    <Layout
      className='layout'
      style={{ minHeight: '100vh' }}
    >
      <Header />
      <Content
        style={{
          margin: '30px',
          paddingTop: `${HEADER.DESKTOP_HEIGHT}px`,
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  )
}
