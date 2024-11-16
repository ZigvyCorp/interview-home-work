import React from "react";

import { Avatar } from "antd";
import { formatDate } from "../../utils/date.utils";
import { IComment } from "../../types/comment";

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
          <span>{formatDate(comment.createdAt)}</span>
        </div>
        <div>
          <p>{comment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
