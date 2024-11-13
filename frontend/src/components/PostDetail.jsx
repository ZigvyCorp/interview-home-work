import React, { useState } from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const PostDetail = ({ post }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.author} - {post.createdAt}</p>
            <p>{post.content}</p>
            <Collapse>
                <Panel header={`${post.comments.length} comments`} key="1">
                    {post.comments.map(comment => (
                        <p key={comment.id}>{comment.text}</p>
                    ))}
                </Panel>
            </Collapse>
        </div>
    );
};

export default PostDetail;