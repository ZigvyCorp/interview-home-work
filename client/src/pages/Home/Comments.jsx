import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsRequest } from "../../redux/actions/commentActions";

export default function Comments({ postId }) {
  const dispatch = useDispatch();
  const { comments, loading, error } = useSelector((state) => state.comments);

  // Fetch comments when the component mounts
  useEffect(() => {
    dispatch(fetchCommentsRequest(postId));
  }, [dispatch, postId]);

  return (
    <div>
      {loading && <p>Loading comments...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        {comments &&
          comments.map((comment) => (
            <div key={comment._id}>{comment.content}</div>
          ))}
      </div>
    </div>
  );
}
