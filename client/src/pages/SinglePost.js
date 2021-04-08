import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

const SinglePost = (props) => {
  const postId = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "API_CALL_REQUEST_POST", postId });
  }, [dispatch, postId]);

  const post = useSelector((state) => state.posts.data);

  return (
    <>
      {post && !Array.isArray(post) && (
        <>
          <PostCard
            title={post.title}
            authorName={post.authorName}
            body={post.body}
            comments={post.comments}
            collapseState={true}
          />
          <Link to={"/"} className="back_btn">
            <Button>Home</Button>
          </Link>
        </>
      )}
    </>
  );
};

export default SinglePost;
