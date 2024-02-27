import React, { useEffect, useState } from "react";
import Comment from "./components/comment";

const CommentBox = ({data}) => {
  const [comments, setComments] = useState(data);
  useEffect(() => {
    setComments(comments)
  }, [data])

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
};

export default CommentBox;
