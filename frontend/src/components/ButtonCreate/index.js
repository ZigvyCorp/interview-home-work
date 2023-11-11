import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { UploadOutlined } from '@ant-design/icons';
import { openModal } from '../../store/post/actions';

const ButtonCreate = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openModal());

    };

    return (
        <Button
            type='dashed'
            color=''
            icon={<UploadOutlined />}
            style={{ marginBottom: '30px' }}
            onClick={handleClick}
        >
            Create Post
        </Button>
    );
};

export default ButtonCreate;