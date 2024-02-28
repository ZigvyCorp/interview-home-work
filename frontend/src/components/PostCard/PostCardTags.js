import React from 'react';
import { Space, Tag } from 'antd';
import colors from '../../utils/colors';

const PostCardTags = ({ tags }) => {
    return (
        <Space wrap>
            {
                tags.map((tag, index) => (
                    <Tag key={index} color={colors[tag]}>{tag}</Tag>
                ))
            }
        </Space>
    );
};

export default PostCardTags;