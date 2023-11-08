import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ id, user, created_at, title, content, comments, tags }) => {
  const [showComments, setShowComments] = useState(false);
  const formattedDate = new Date(created_at);

  return (
    <div className="post card mt-3 bg-light">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="card-author text-start">
              {user?.name || "Anonymous"}
            </h4>
            <p className="card-text text-muted">
              {formattedDate.toLocaleString()}
            </p>
          </div>
          <div className="tags text-end">
            <strong>Tags:</strong>{" "}
            {tags?.map((tag, index) => (
              <span key={index} className="badge bg-primary me-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Use custom style to remove underline */}
        <Link to={`/post/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>{title}</h2>
        </Link>
        <p className="card-text">{content.substring(0, 100)}...</p>
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-link"
            onClick={() => setShowComments(!showComments)}
          >
            {showComments ? "Hide Comments" : "Show Comments"}
          </button>

          <p className="card-text text-end">
            <strong>{comments?.length || 0} Comments</strong>
          </p>
        </div>
        {showComments && (
          <div className="comments text-start">
            <h5>Comments:</h5>
            {comments?.length > 0 ? (
              <ul className="list-group">
                {comments.map((comment, index) => (
                  <li key={index} className="list-group-item">
                    <p>
                      <strong>{comment.user?.name || "Anonymous"}:</strong>{" "}
                      {comment.content}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
