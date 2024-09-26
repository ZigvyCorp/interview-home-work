import dayjs from "dayjs";
import React from "react";

type CommentProps = {
  comment: Comments;
  user: User;
};

const Comment = ({ comment, user }: CommentProps) => {
  return (
    <div className="my-4">
      <div className="d-flex flex-row">
        <img
          height={50}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s"
          alt="Comment author avatar"
        />
        <div className="d-flex flex-column ms-3">
          <div>
            <span className="text-muted">{user.name} </span>
            <span className="text-black-50">
              {dayjs(Date.now()).diff(dayjs(comment.createdAt), "days")} days
              ago
            </span>
          </div>
          <p className="text-secondary">{comment.content}</p>
          <a href="#" className="text-black-50">Reply to</a>
        </div>
      </div>
    </div>
  );
};

export default Comment;
