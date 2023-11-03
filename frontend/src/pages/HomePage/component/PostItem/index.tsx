import { useState } from "react";
import CommentItem from "../CommentItem";
import "./postItem.styles.css";

type PostItemProps = {
  data: {
    id: number;
    content: string;
    created_at: string;
    title: string;
    tag: string[];
    owner: number;
  };
};
function PostItem({ data }: PostItemProps) {
  const [isTouched, setTouched] = useState(false);
  const [expandComment, setExpandComment] = useState(false);
  const truncateContent = `${data.content.slice(0, 100)}...`;

  const handleTouch = () => {
    setTouched(!isTouched);
  };

  const handleExpandComment = () => {
    setExpandComment(!expandComment);
  };

  const handleReplyTo = () => {
    console.log("reply to");
  };

  return (
    <div className="post-item-container">
      <div className="post-title-text">{data.title}</div>
      <div className="post-info">
        <div className="post-author">Author: John Smith</div>
        <div className="post-created-at">{`Created at: ${data.created_at}`}</div>
      </div>
      <div className="post-content" onClick={handleTouch}>
        {isTouched ? data.content : truncateContent}
      </div>
      <div className="post-number-comment" onClick={handleExpandComment}>
        2 replies
      </div>
      {expandComment && (
        <>
          <CommentItem handleReplyTo={handleReplyTo} />
          <CommentItem handleReplyTo={handleReplyTo} />
        </>
      )}
    </div>
  );
}

export default PostItem;
