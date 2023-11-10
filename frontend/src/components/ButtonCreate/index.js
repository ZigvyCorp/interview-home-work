import React from 'react';

import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/post/actions';

const ButtonCreate = () => {
    const dispatch = useDispatch();

    return (
        <Button type='primary' icon={<UploadOutlined />} style={{ marginBlock: '20px' }} onClick={() => {
            dispatch(openModal());
        }}>
            Create Post
        </Button>
    );
};

export default ButtonCreate;