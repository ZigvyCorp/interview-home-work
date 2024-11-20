/* eslint-disable react/prop-types */
import ReactIcon from '../assets/react.svg';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Avatar, Flex, Typography, Layout } from 'antd';
const { Header } = Layout;
const { Text } = Typography;
export const NavBar = () => {
  return (
    <Flex
      justify="space-between"
      style={{ border: '1px solid black' }}
      align="center"
    >
      <Header
        level={3}
        style={{
          display: 'flex',
          backgroundColor: 'white',
          alignItems: 'center',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={ReactIcon} alt="Logo" />
          <Text style={{ fontSize: '24px', marginLeft: '2px' }}>Logo</Text>
        </Link>
      </Header>
      <Link to="/">
        <Text underline style={{ fontSize: '24px', color: 'blue' }}>
          Post
        </Text>
      </Link>

      <Header
        level={3}
        style={{
          display: 'flex',
          backgroundColor: 'white',
          alignItems: 'center',
        }}
      >
        <Avatar shape="square" size={40} icon={<UserOutlined />} />
        <Text style={{ fontSize: '18px', marginLeft: '2px' }}>Adam Levine</Text>
      </Header>
    </Flex>
  );
};
