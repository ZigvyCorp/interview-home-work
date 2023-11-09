import { Fragment, useEffect, useState } from "react";
import Comments from "../component/Comment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchPostIdRequest } from "../redux/actions/post/postIdAction";
import { fetchCommentPostIdRequest } from "../redux/actions/comment/commentPostIdAction";
import { fetchUserIdRequest } from "../redux/actions/user/userIdAction";

const DetailPost = () => {
  const dispatch = useDispatch();

  const { postId } = useParams();
  const [showComment, setShowComment] = useState(false);

  const handleShowComment = () => {
    setShowComment(!showComment);
  };

  const { loading, post, error } = useSelector(
    (state: RootState) => state.postId
  );

  const { loadingComment, comments, errorComment } = useSelector(
    (state: RootState) => state.commentPostId
  );

  const { loadingUserId, user, errorUserId } = useSelector(
    (state: RootState) => state.userIdReducer
  );
  console.log(user);
  useEffect(() => {
    if (postId !== undefined) {
      dispatch(fetchPostIdRequest({ postId: Number(postId) }));
      dispatch(fetchCommentPostIdRequest({ postId: Number(postId) }));
    }

    if (post.userId !== undefined) {
      dispatch(fetchUserIdRequest({ userId: Number(post.userId) }));
    }
  }, [dispatch]);

  const CommentPostId = () => {
    return (
      <>
        {comments.map((comment, index) => (
          <Comments key={index} content={comment.body} name={comment.name} />
        ))}
      </>
    );
  };

  return (
    <Fragment>
      <div className="p-4 mt-5 d-flex flex-column">
        <h1 className="text-center">{post.title}</h1>
        <div className="d-flex justify-content-between">
          <div>
            <p>Author: </p>
            <p>Create at: Oct 1, 2023</p>
          </div>
          <div>coming soon</div>
        </div>
        <div className="my-5">
          <p>{post.body}</p>
        </div>
        <div>
          <p style={{ cursor: "pointer" }} onClick={() => handleShowComment()}>
            {comments.length} replies
          </p>
        </div>
        <hr />
        {showComment ? <CommentPostId /> : ""}
      </div>
    </Fragment>
  );
};

export default DetailPost;
