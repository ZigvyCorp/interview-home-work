import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const PostCardTitle = ({ title, id }) => {
    return (
        <Typography.Title level={2} style={{ textAlign: "center" }}>
            <Link style={{ color: "black" }} to={`/posts/${id}`}>
                {title}
            </Link>
        </Typography.Title>
    );
};

export default PostCardTitle;