import React from 'react';
import dayjs from 'dayjs';
import { Avatar, Tooltip } from 'antd';
import { Comment } from '@ant-design/compatible';

const PostCommentItems = ({ comment }) => {
    const actions = [
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <Comment
            actions={actions}
            author={<p>Han Solo</p>}
            avatar={
                <Avatar
                    alt="Han Solo"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
            }
            content={
                <p>
                    {comment.content}
                </p>
            }
            datetime={
                <Tooltip title={dayjs().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{dayjs(comment.created_at).fromNow()}</span>
                </Tooltip>
            }
        />
    );
};

export default PostCommentItems;