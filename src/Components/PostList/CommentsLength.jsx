import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../redux/actions/commentActions";

function CommentsLength({ postId }) {
  const dispatch = useDispatch();
  //Use FE_Task
  // const comments = useSelector((state) => state.comments.comments);

  //Use BE_Task
  const comments = useSelector((state) => state.comments.comments.result);
  const thisComment = comments?.filter((e) => e.post === postId);

  const commentsLength = thisComment?.length;
  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);
  return { comments, commentsLength };
}

export default CommentsLength;
