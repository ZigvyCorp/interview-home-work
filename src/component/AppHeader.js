import { Layout, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Header } = Layout;
const AppHeader = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
    background:'gray', border:'solid',marginBottom:'20px' }}>
    <Link to={'/'}
      style={{ width: '33.33%', height: '100%', background: '#eee', alignItems:'center',
       justifyContent:'center',display:'flex',  color: 'inherit', textDecoration: 'none'}}>
        HOME
    </Link>
      <div style={{ width: '33.33%',alignItems:'center', justifyContent:'center',display:'flex'}}>BLOGS</div>
      <div style={{ display: 'flex', alignItems: 'center', width: '33.33%', justifyContent:'center', background: '#eee', height: '100%' }}>
        <Avatar icon={<UserOutlined />} size="large" style={{ marginRight: '8px' }} />
        <span>VÕ XUÂN HUY</span>
      </div>
    </Header>
  );
};

export default AppHeader;
