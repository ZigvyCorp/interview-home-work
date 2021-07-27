import { Spin } from "antd";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Post from "../../components/Post/Post";
import { getPost } from "../../store/actions/post.action";
import { RootState } from "../../store/reducers";
import { PostType } from "../../types";
import "./Post.scss";

const PostPage = () => {
  const post: PostType = useSelector((state: RootState) => state.post.post);
  const { id }: any = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);
  if (!post) return <Spin />;
  return (
    <div>
      <Post post={post} />
    </div>
  );
};

export default PostPage;
