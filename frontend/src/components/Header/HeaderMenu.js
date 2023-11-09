import React from 'react';
import {
    Space,
    Avatar,
    Button,
    Popover,
    Typography,
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LogoutOutlined } from '@ant-design/icons';
import { logout } from '../../store/auth/actions';

const RenderContent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    return <Button danger icon={<LogoutOutlined />} onClick={() => {
        dispatch(logout());
        navigate('/login');
    }}>
        Logout
    </Button>;
};

const HeaderMenu = () => {
    const { currentUser } = useSelector(state => state.auth);
    return (
        <Popover placement='bottom' content={RenderContent}>
            <Space style={{ cursor: 'pointer' }}>
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                <Typography.Text strong style={{ color: '#fff' }}>{currentUser?.name}</Typography.Text>
            </Space>
        </Popover>
    );
};

export default HeaderMenu;