import React, { useEffect } from "react";
import { Card } from "antd";
import { truncate } from "lodash";
import Author from "../user/Author";
import CommentList from "../comment/CommentList";
import { useDispatch } from "react-redux";
import { getCommentsOfPostAsync, selectPost } from "./postSlice";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  // const { posts } = useSelector(selectPost);

  useEffect(() => {
    dispatch(getCommentsOfPostAsync(post.id));
  }, [dispatch]);

  return (
    <>
      <Card
        title={post.title}
        style={{ width: 800, margin: "1rem" }}
        headStyle={{ textAlign: "center", fontWeight: "700" }}
        bodyStyle={{ textAlign: "start" }}
      >
        <Author id={post.userId} />
        <p>Create At: Sep 20,2018</p>
        <p> {truncate(post.body, { length: 100 })}</p>
        <CommentList postId={post.id} />
      </Card>
    </>
  );
};

export default Post;
