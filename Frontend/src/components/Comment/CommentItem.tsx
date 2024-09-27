import React from 'react';
import { type IComment } from '../../types/comment';
import { formatDate } from '../../utils';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';

const CommentItem: React.FC<IComment> = ({
  user,
  body,
  timestamp,
}): JSX.Element => {
  return (
    <div className="flex gap-2 border-bottom-1 border-indigo-500 py-3 px-2">
      <div>
        <Avatar
          label={user?.name.slice(0, 1)}
          size="large"
          shape="circle"
          className="bg-indigo-500 text-white"
        />
      </div>
      <div>
        <div className="flex align-items-center gap-2">
          <p className="text-sm text-500">{user?.name}</p>
          <span className="text-sm text-400">
            {formatDate(timestamp?.createdAt)}
          </span>
        </div>
        <div className="text-900">{body}</div>
        <Button className="mt-2 p-2 text-sm">Reply to</Button>
      </div>
    </div>
  );
};

export default CommentItem;
