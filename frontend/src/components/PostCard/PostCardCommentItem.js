import React from 'react';
import dayjs from 'dayjs';
import { Flex, Avatar, Space, Typography } from 'antd';
import { useSelector } from 'react-redux';


const PostCardCommentItem = ({ postId }) => {


    const { comments } = useSelector(state => state.comment);

    const postComments = comments[`post - ${postId}`];

    return (
        <>
            {
                postComments?.map((comment, index) => (
                    <Flex gap="large" key={index}>
                        <Avatar size="large" src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                        <Space direction='vertical' align='start'>
                            <Space size='large'>
                                <Typography.Text type='secondary' strong>{comment?.owner?.name}</Typography.Text>
                                <Typography.Text type='secondary'>{dayjs(comment.created_at).fromNow(true)}</Typography.Text>
                            </Space>
                            <Typography.Text>{comment?.content}</Typography.Text>
                        </Space>
                    </Flex>
                ))
            }
        </>

    );
};

export default PostCardCommentItem;