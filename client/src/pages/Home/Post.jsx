import React, { useEffect, useState } from "react";
import Comments from "./Comments";

export default function Post({ owner, title, content, create_at, tags, _id }) {
  const [showComments, setShowComments] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const toggleContent = () => {
    setShowFullContent((prev) => !prev); // Toggle full content visibility
  };

  const truncatedContent = content.split(" ").slice(0, 100).join(" ");

  const date = new Date(create_at);
  const month = date.toLocaleString("en-US", { month: "short" });
  return (
    <div className="py-5">
      <h2 className="text-center">{title}</h2>
      <div>Author: {owner.name}</div>

      <div>
        Created at : {`${month} ${date.getDate()}, ${date.getFullYear()}`}
      </div>
      <div className="py-3">
        <p>
          {showFullContent ? content : `${truncatedContent}...`}
          {content.split(" ").length > 100 && (
            <span role="button" className="text-info" onClick={toggleContent}>
              {showFullContent ? "read less" : "read more"}
            </span>
          )}
        </p>
      </div>
      <div>
        {tags.map((tag) => (
          <span className="text-primary">#{tag} </span>
        ))}
      </div>

      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {showComments && <Comments postId={_id} />}
    </div>
  );
}
