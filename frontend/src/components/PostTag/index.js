import React from 'react';
import { Space, Tag } from 'antd';
import { tags } from '../../utils/constant';

const PostTag = () => {
    return (
        <Space wrap>
            {tags && tags.map((tag, index) => (
                <Tag key={index} color={tag}>{tag}</Tag>
            ))}
        </Space>
    );
};

export default PostTag;