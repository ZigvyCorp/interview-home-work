import { Layout, Space } from 'antd';
import { HEADER } from '../../configs/app';
import Logo from './Logo';
import Account from './Account';

const { Header } = Layout;

export default function LayoutHeader() {
  return (
    <Header style={{
      top: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
      position: 'fixed',
      alignItems: 'center',
      height: HEADER.DESKTOP_HEIGHT,
    }}>
      <Space style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Logo />
        <Account />
      </Space>
    </Header>
  )
}
