import React, { useEffect, useState } from "react";
import { Tooltip, Avatar } from "antd";
import { Comment } from "@ant-design/compatible";
import moment from "moment";
import { UserOutlined } from "@ant-design/icons";
const CommentItem = ({ comment }) => {
  return (
    <Comment
      className="mb-2"
      author={<a>{comment?.authorId?.userName}</a>}
      avatar={
        <Tooltip title="Han Solo" placement="top">
          <Avatar
            style={{
              backgroundColor: "#87d068",
            }}
            icon={<UserOutlined />}
          />
        </Tooltip>
      }
      content={<p>{comment?.body}</p>}
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default CommentItem;
