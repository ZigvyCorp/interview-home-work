import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchPostIdRequest } from "../redux/actions/post/postIdAction";
import { fetchCommentPostIdRequest } from "../redux/actions/comment/commentPostIdAction";
import { fetchUserIdRequest } from "../redux/actions/user/userIdAction";
import { colors } from "../colors";

import Comments from "../component/Comment";
import SmallBorder from "../component/SmallBorder";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./Error";

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
        {loading ? (
          <LoadingScreen />
        ) : error !== null ? (
          <ErrorScreen />
        ) : (
          <>
            <h1 className="text-center">{post.title}</h1>
            <div className="d-flex flex-row my-5">
              <div className="col">
                <p>Author: </p>
                <p>Create at: Oct 1, 2023</p>
              </div>
              <div className="col"></div>
              <div className="d-flex flex-row flex-wrap col">
                {colors.map((color) => (
                  <SmallBorder color={color} />
                ))}
              </div>
            </div>
            <div className="my-5">
              <p>{post.body}</p>
            </div>
            <div>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => handleShowComment()}
              >
                {comments.length} replies
              </p>
            </div>
          </>
        )}
        <hr />
        {showComment ? (
          loadingComment ? (
            <LoadingScreen />
          ) : (
            <CommentPostId />
          )
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default DetailPost;
