import { useState } from "react";
import Comment from "../components/Comment";
import { Link } from "react-router-dom";
import { randColor } from "../utils";

export default function PostCard({ post }) {
  const time = new Date(post?.created_at).toDateString().slice(4);
  const showedContent = post?.content.slice(0, 100) + "...";
  const hasComment = post?.comments.length > 0;

  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCommentSection = () => {
    setIsCollapsed((prev) => !prev);
  };
  return (
    <div className="container border border-dark p-3">
      <div className="d-flex justify-content-center fs-2 fw-semibold">
        <Link to={`/posts/${post?.id}`} className="text-decoration-none">
          <span className="hover-text">{post?.title || "Post title"}</span>
        </Link>
      </div>

      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <span>Author: {post?.author[0]?.username || "Author name"}</span>
          <span>Created: {time}</span>
        </div>
        <div>
          <div className="d-flex flex-row gap-2">
            {post.tags.map((tag, index) => (
              <div
                key={index}
                className={`border rounded p-1 border-${randColor()}`}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 mb-4">
        <Link to={`/posts/${post?.id}`} className="text-decoration-none">
          <p className="hover-text">{showedContent}</p>
        </Link>
      </div>

      <div>
        <div
          className={`d-flex flex-row gap-3 border-bottom pb-2 ${
            hasComment && "cursor-pointer"
          }`}
          onClick={toggleCommentSection}>
          <span className="text-secondary">
            {post?.comments.length || 0} replies
          </span>
          {isCollapsed && hasComment && (
            <span className="text-danger fw-medium">
              (The comment section can be toggled collapse/expand)
            </span>
          )}
        </div>

        {!isCollapsed && (
          <div>
            {post?.comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
