import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import styled from 'styled-components';

const FlexMenu = styled(Menu)`
  display: flex;
  justify-content: space-between;
`;

const FlexItem = styled(Menu.Item)`
  flex: 1;
  text-align: center;
`;

const TopMenu = (props) => {
  const [current, setCurrent] = useState('home');

  const handleClick = (event) => {
    setCurrent(event.key);
  };

  return (
    <FlexMenu mode='horizontal' selectedKeys={[current]} onClick={handleClick}>
      <FlexItem key='home'>
        <Link to='/'>HomePage</Link>
      </FlexItem>
      <FlexItem key='blogs'>
        <Link to='/blogs'>Blogs</Link>
      </FlexItem>
      <FlexItem key='account'>
        <Link to='/account'>Account</Link>
      </FlexItem>
    </FlexMenu>
  );
};

export default TopMenu;
