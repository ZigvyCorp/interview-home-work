import { Fragment, useEffect, useState } from "react";
import Comments from "../component/Comment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchPostIdRequest } from "../redux/actions/postIdAction";

const DetailPost = () => {
  const dispatch = useDispatch();

  const { postId } = useParams();
  const [showComment, setShowComment] = useState(false);

  console.log("postId", postId);
  const handleShowComment = () => {
    setShowComment(!showComment);
  };

  const { loading, post, error } = useSelector(
    (state: RootState) => state.postId
  );

  useEffect(() => {
    if (postId !== undefined) {
      dispatch(fetchPostIdRequest({ postId: Number(postId) }));
    }
    console.log(post);
  }, []);

  return (
    <Fragment>
      <div className="p-4 mt-5 d-flex flex-column">
        <h1 className="text-center">{post.title}</h1>
        <div className="d-flex justify-content-between">
          <div>
            <p>Author: John Smith</p>
            <p>Create at: Sep 20, 2018</p>
          </div>
          <div>coming soon</div>
        </div>
        <div className="my-5">
          <p>{post.body}</p>
        </div>
        <div className="mx-3">
          <p style={{ cursor: "pointer" }} onClick={() => handleShowComment()}>
            2 replies
          </p>
        </div>
        <hr className="mx-3"></hr>
        {showComment ? <Comments /> : ""}
      </div>
    </Fragment>
  );
};

export default DetailPost;
