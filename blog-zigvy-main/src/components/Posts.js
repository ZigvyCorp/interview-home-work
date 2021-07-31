import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllpost,
  postSelector,
  searchSelector,
} from "../store/reducers/postSlice";
import { getAllComment, commentSelector } from "../store/reducers/commentSlice";
import { getAllUser } from "../store/reducers/userSlice";
import Post from "./Post";
const Posts = () => {
  const posts = useSelector(postSelector);
  const searchvalue = useSelector(searchSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllpost());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllComment());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  return (
    <div className="row posts-modify">
      {posts
        .filter((post) => {
          return post.title.toLowerCase().includes(searchvalue.toLowerCase());
        })
        .map((post) => (
          <Post
            title={post.title}
            body={post.body}
            key={post.id}
            id={post.id}
            userId={post.userId}
          />
        ))}
    </div>
  );
};

export default Posts;
