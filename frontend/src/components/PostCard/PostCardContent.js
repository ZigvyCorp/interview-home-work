import React from 'react';
import { Typography } from 'antd';
import getShortenString from '../../utils/getShortenString';

const PostCardContent = ({ content, isDetails }) => {
    return (
        <Typography.Title level={5}>
            {isDetails ? content : getShortenString(content, 100)}
        </Typography.Title>
    );
};

export default PostCardContent;