import { Comment } from "@ant-design/compatible";
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip, Typography } from "antd";
import React, { createElement, useState } from "react";
import { Comment as CommentModel } from "../../models/comments.model";

const { Text } = Typography;

const CustomComment = (props: CommentModel) => {
  const { body, email } = props;
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState<string | null>(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key='comment-basic-like' title='Like'>
      <Text onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <Text className='comment-action'>{likes}</Text>
      </Text>
    </Tooltip>,
    <Tooltip key='comment-basic-dislike' title='Dislike'>
      <Text onClick={dislike}>
        {React.createElement(action === "disliked" ? DislikeFilled : DislikeOutlined)}
        <Text className='comment-action'>{dislikes}</Text>
      </Text>
    </Tooltip>,
    <Text key='comment-basic-reply-to'>Reply to</Text>,
  ];

  return (
    <Comment
      style={{ backgroundColor: "transparent" }}
      actions={actions}
      author={<Text>{email}</Text>}
      avatar={<Avatar size='large' shape='square' icon={<UserOutlined />} />}
      content={<Text>{body}</Text>}
      datetime={
        <Tooltip title='2016-11-22 11:22:33'>
          <Text>8 hours ago</Text>
        </Tooltip>
      }
    />
  );
};

export default CustomComment;
