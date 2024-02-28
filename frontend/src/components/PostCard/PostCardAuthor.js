import React from 'react';
import { useSelector } from 'react-redux';
import { Space, Typography } from 'antd';

const PostCardAuthor = ({ authorId, createdAt }) => {
    const { list } = useSelector(state => state.user);
    const author = list?.find(user => user.id === authorId);

    return (
        <Space direction="vertical">
            <Typography.Text strong>{`Author: ${author?.name}`}</Typography.Text>
            <Typography.Text strong>{`Created at: ${createdAt}`}</Typography.Text>
        </Space>
    );
};

export default PostCardAuthor;