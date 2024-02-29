import { IComment } from "@/common/@types/types";

interface ICommentProps {
  comment: IComment;
}

const Comment = ({ comment }: ICommentProps) => {
  return (
    <div className="row mb-3">
      <div className="col-1">
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="object-fit-cover rounded-circle border border-dark"
            src="/zigvy-logo.webp"
            alt=""
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="col-11">
        <p className="text-secondary-emphasis mb-2">
          <span className="fw-bold">{comment.email}</span>
          <span className="text-secondary ms-3">2 days ago</span>
        </p>
        <p>{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;
