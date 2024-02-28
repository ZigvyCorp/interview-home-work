import React from 'react';

import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

import { Card, Flex } from 'antd';
import PostCardTitle from './PostCardTitle';
import PostCardAuthor from './PostCardAuthor';
import PostCardTags from './PostCardTags';
import PostCardContent from './PostCardContent';
import PostCommentSection from './PostCommentSection';

const PostCard = ({ post, isDetails }) => {
    const { id, title, content, tags, owner, created_at } = post;

    const { list } = useSelector(state => state.comment);

    const comments = list.filter(comment => comment.post === id);

    return (
        <Card>
            <PostCardTitle title={title} id={id} />
            <Flex justify="space-between" style={{ marginBottom: "30px" }}>
                <PostCardAuthor authorId={owner} createdAt={dayjs(created_at).format("MMMM D, YYYY")} />
                <PostCardTags tags={tags} />
            </Flex>
            <PostCardContent content={content} isDetails={isDetails} />
            <PostCommentSection comments={comments} postId={id} />
        </Card>
    );
};

export default PostCard;