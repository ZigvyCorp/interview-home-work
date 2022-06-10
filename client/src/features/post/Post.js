import React, { useEffect, useState } from "react";
import { Button, Card } from "antd";
import { truncate } from "lodash";
import Author from "../user/Author";
import CommentList from "../comment/CommentList";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsOfPostAsync, selectPost } from "./postSlice";

const Post = ({ post }) => {
  const [showComment, setShowComment] = useState(false);
  const dispatch = useDispatch();
  const { totalComment } = useSelector(selectPost);

  useEffect(() => {
    dispatch(getCommentsOfPostAsync(post.id));
  }, [dispatch]);

  return (
    <>
      <Card
        title={post.title}
        style={{
          maxWidth: 800,
          margin: "1rem auto 0 auto",
          border: "3px solid #ccc",
          padding: "1rem",
          borderRadius: "10px",
        }}
        headStyle={{
          textAlign: "center",
          fontWeight: "600",
          fontSize: "1.4rem",
        }}
        bodyStyle={{ textAlign: "start", fontWeight: "500" }}
      >
        <Author id={post.userId} />
        <p>Create At: Sep 20, 2018</p>
        <p> {truncate(post.body, { length: 100 })}</p>
        <Button
          onClick={() => {
            setShowComment(!showComment);
          }}
          type="text"
          style={{ border: "none", padding: "0" }}
        >
          {totalComment[post.id]?.length} replies
        </Button>
        {showComment && <CommentList comments={totalComment[post.id]} />}
      </Card>
    </>
  );
};

export default Post;
