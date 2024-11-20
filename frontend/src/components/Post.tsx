import React from 'react';
import { Card, Row, Space, Typography } from 'antd';
import { Tags } from './Tag';
import { CommentCollapse } from './CommentCollapse';
import { IPost } from 'redux/posts/interface';

interface IPostProps {
  post: IPost
}

export function Post({post}: IPostProps) {
  return (
    <Card title={post.title}  style={{ width: "100%", marginTop: 10, marginBottom: 15 }} headStyle={{ textAlign: "center", fontSize: 24 }}>
        <Space direction='horizontal' style={{justifyContent: "space-between", width: "100%"}}>
            <Space direction='vertical'>
                <Typography>Author: John Smith</Typography>
                <Typography>Create at: Sep 20, 2018</Typography>
            </Space>
            <Tags tag={post.tags|| []}/>
        </Space>
        
        <Typography>
            {/* {post.content} */}
            {post.body || post.content}
        </Typography>
        <CommentCollapse/>
    </Card>
  );
};

