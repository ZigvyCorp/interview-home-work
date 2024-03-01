import React, { useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { postAPI } from "../api";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/actions/postActions";
function PostDetail() {
  const param = useParams();

  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPost(param.id));
  }, [dispatch]);

  return (
    <div>
      <Header />
      {post ? (
        <div className="d-flex justify-content-center   ">
          <Post post={post} />
        </div>
      ) : null}
    </div>
  );
}

export default PostDetail;
