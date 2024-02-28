import React from 'react';
import { Avatar, Space, Typography } from 'antd';

const HeaderUser = () => {
    return (
        <Space>
            <Avatar size="large" src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
            <Typography.Text strong>Khang</Typography.Text>
        </Space>
    );
};

export default HeaderUser;;