import React from 'react';
import { Flex } from 'antd';
import PostCardForm from './PostCardForm';
import PostCardCommentItem from './PostCardCommentItem';

const PostCardCommentSection = ({ postId }) => {
    return (
        <Flex vertical gap="large">
            <PostCardForm postId={postId} />
            <PostCardCommentItem postId={postId} />
        </Flex>

    );
};

export default PostCardCommentSection;