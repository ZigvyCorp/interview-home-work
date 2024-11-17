import { Avatar } from "antd";
import React from "react";
import { IComment } from "../../types/comment";
import { calculateTimeAgo } from "../../utils/date.utils";

interface ICommentItemProps {
  comment: IComment;
}

const CommentItem: React.FC<ICommentItemProps> = ({ comment }) => {
  return (
    <div className="flex gap-4 p-2">
      <div>
        <Avatar
          size="small"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </div>
      <div>
        <div className="flex gap-4">
          <span>{comment?.owner?.name}</span>
          <span>{calculateTimeAgo(comment.createdAt)}</span>
        </div>
        <div>
          <p>{comment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
