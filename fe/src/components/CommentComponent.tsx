import React from "react";
import { Comment } from "../models/CommentModel";
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

type CommentComponentProps = {
  comment?: Comment;
};

const CommentComponent = (props: CommentComponentProps) => {
  const { comment } = props;

  return (
    <div className="p-2 m-2 flex gap-4">
      <div>
      <Avatar icon={<UserOutlined />} />
      </div>
      <div>

      <p className="text-gray-400 text-base">{comment?.ownerDetail?.name}</p>
      <p>{comment?.content}</p>
      </div>
    </div>
  );
};

export default CommentComponent;
