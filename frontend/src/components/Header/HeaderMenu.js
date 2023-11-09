import React from 'react';
import {
    Space,
    Avatar,
    Button,
    Popover,
    Typography,
} from 'antd';

import { LogoutOutlined } from '@ant-design/icons';

const RenderContent = () => {
    return <Button danger icon={<LogoutOutlined />}>
        Logout
    </Button>;
};

const HeaderMenu = () => {
    return (
        <Popover placement='bottom' content={RenderContent}>
            <Space style={{ cursor: 'pointer' }}>
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                <Typography.Text strong style={{ color: '#fff' }}>username</Typography.Text>
            </Space>
        </Popover>
    );
};

export default HeaderMenu;