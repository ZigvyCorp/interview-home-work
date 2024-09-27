import React, { useState } from "react";

const CommentsList = ({ postId, comments }) => {
  const [isOpen, setIsOpen] = useState(false);

  const postComments = comments.filter((comment) => comment.postId === postId);
  const commentCount = postComments.length;

  const toggleComments = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <div
        onClick={toggleComments}
        style={{ cursor: "pointer", fontWeight: "bold", color: "blue" }}
      >
        {isOpen ? "Hide" : "Show"} Comments ({commentCount})
      </div>
      {isOpen && (
        <ul style={{ listStyleType: "none", paddingLeft: "1rem" }}>
          {postComments.map((comment) => (
            <li key={comment.id}>
              <strong>
                {comment.name} ({comment.email}):
              </strong>{" "}
              {comment.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsList;
