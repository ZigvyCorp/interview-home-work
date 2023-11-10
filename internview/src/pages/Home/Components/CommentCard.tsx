import { Avatar, Space, Typography } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Comment } from "../../../Model/Comment";

const { Text } = Typography;

interface CommentProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentProps> = (props) => {
  const { comment } = props;
  return (
    <>
      <Space align="start">
        <Avatar size={"large"} icon={<UserOutlined />} />
        <Space direction="vertical">
          <Space>
            <Text type="secondary">{comment.email}</Text>
            <Text disabled>2 day ago</Text>
          </Space>
          <Text>{comment.body}</Text>
          <Text type="secondary">Reply to</Text>
        </Space>
      </Space>
    </>
  );
};

export default CommentCard;
