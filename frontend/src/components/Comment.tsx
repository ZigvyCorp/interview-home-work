import React from 'react';
import { Avatar, Space } from 'antd';

export function Comment() {
  return (
    <Space>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Space direction='vertical'>
        <Space direction='horizontal'>
            <span>Username</span>
            <span>a day ago</span>
        </Space>
        <span>Description</span>
      </Space>
      
    </Space>
  );
};






