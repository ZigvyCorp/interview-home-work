import React from 'react';
import { Avatar, Typography } from 'antd';
import { Comment } from '@ant-design/compatible';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

const CommentItem = ({ comment }) => {
  return (
    <Comment
      author={<Text strong>{comment.name}</Text>}
      avatar={<Avatar icon={<UserOutlined />} />}
      content={<p>{comment.body}</p>}
      datetime={<Text type="secondary">{comment.email}</Text>}
    />
  );
};

export default CommentItem;
