import React from "react";
import "./comment.css";

type Props = {
  author: string;
  date?: number;
  content: string;
};

const Comment: React.FC<Props> = ({ author, content }) => {
  const random = Math.floor(Math.random() * 100) + 1;

  return (
    <div className="card d-flex flex-row justify-content-between mt-3">
      <div>
        <img
          src={
            "data:image/jpeg;base64,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"
          }
          alt="Avatar"
          className="avatar"
        />
      </div>

      <div className="card-body">
        <div className="ml-2">
          <h6 className="card-title text-muted ">
            <span> {author}</span>{" "}
            <span className="date-ago">
              {random} {random === 1 ? "day" : "days"} ago
            </span>
          </h6>
        </div>
        <p className="card-text">{content}</p>
        <a href="#" className="card-link link-secondary text-decoration-none">
          Reply to
        </a>
      </div>
    </div>
  );
};

export default Comment;