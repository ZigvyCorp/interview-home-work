import React, { useState } from 'react';
import { Divider, Space, Typography } from 'antd';
import { CommentOutlined } from '@ant-design/icons';
import PostCommentItems from './PostCommentsItem';

const PostCommentSection = ({ comments }) => {
    const [showComments, setShowComments] = useState(false);

    const handleShowComments = () => {
        setShowComments(!showComments);
    };

    return (
        <>
            <Space>
                <CommentOutlined onClick={handleShowComments} />
                <Typography.Text color='secondary' strong>
                    {comments.length} replies
                </Typography.Text>
            </Space>
            {comments.length > 0 && <Divider />}
            {
                showComments && comments.map(comment => (
                    <PostCommentItems
                        key={comment.id}
                        comment={comment}
                    />)
                )
            }
        </>
    );
};

export default PostCommentSection;