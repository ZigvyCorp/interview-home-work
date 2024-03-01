import React, { useEffect, useState } from "react";
import { commentAPI } from "../api";
import Comment from "./Comment";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getCommentsByPost = async (id) => {
      try {
        const res = await commentAPI.getCommentsByPostId(id);
        setComments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCommentsByPost(postId);
  }, []);

  return <div>{comments ? comments.map((comment) => <Comment comment={comment} />) : null}</div>;
}

export default CommentList;
