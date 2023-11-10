import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space, Typography } from 'antd';

export function User() {
  return (
    <Space style={{ padding: '0 10px' }}>
      <Badge count={0}>
        <Avatar shape="square" icon={<UserOutlined />} size={'large'} />
      </Badge>
      <Typography style={{ fontSize: 20 }}>Viet Trung</Typography>
    </Space>
  );
}
