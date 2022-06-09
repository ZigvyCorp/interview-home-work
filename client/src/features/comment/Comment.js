import React from "react";
import { Avatar, Typography, Comment as CommentAntD } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Comment = ({ comment }) => {
  return (
    <div>
      <CommentAntD
        author={<a>{comment?.email}</a>}
        avatar={
          <Avatar
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 64,
              xl: 80,
              xxl: 100,
            }}
            style={{ backgroundColor: "#fde3cf" }}
            icon={<UserOutlined />}
          />
        }
        content={<p>{comment?.body}</p>}
        datetime={
          <Text italic style={{}}>
            a day ago
          </Text>
        }
      />
      <Text style={{ marginLeft: "5rem", color: "#636e72" }}>Reply to</Text>
    </div>
  );
};

export default Comment;
