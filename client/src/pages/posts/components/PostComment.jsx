import { UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Space } from "antd";
import React from "react";

const PostComment = ({ comment }) => {
  return (
    <Flex key={comment.id} gap={20} className="mt-2">
      <div>
        <Avatar icon={<UserOutlined />} />
      </div>
      <Space direction="vertical" size="small">
        <div>
          <span className="comment-name">Han solo</span>
          <span className="text-light"> a second ago</span>
        </div>
        <p>{comment.body}</p>
        <p className="text-light cursor-pointer">Reply to</p>
      </Space>
    </Flex>
  );
};

export default PostComment;
