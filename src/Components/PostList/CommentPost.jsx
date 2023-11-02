import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../redux/actions/commentActions";
import user from "../../assets/user.png";
import "./style.css";
function CommentPost({ postId }) {
  const dispatch = useDispatch();
  //Use FE_Task
  // const comments = useSelector((state) => state.comments.comments);

  //Use BE_task
  const comments = useSelector((state) => state.comments.comments.result);
  const users = useSelector((state) => state.users.users.result);
  const thisComment = comments?.filter((e) => e.post === postId);

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);
  return (
    <div>
      {thisComment?.map((comment, index) => (
        <div key={index}>
          <div className="comment_avatar">
            <img src={user}></img>
            <p>{users[comment?.owner]?.username}</p>
            {/* Use FE_Task */}
            {/* <p>{comment.email}</p> */}
          </div>
          <div className="comment_content">
            {/* Use FE_Task */}
            {/* <p>{comment.body}</p> */}
            <p>{comment.content}</p>
            <a href="#">Reply to</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentPost;
