
import React from 'react';
import PostCard from '../PostCard';
import { Space } from 'antd';

const ListPost = () => {
    return (
        <Space direction='vertical' size="large">
            <PostCard />
            <PostCard />
            <PostCard />
        </Space>
    );
};

export default ListPost;