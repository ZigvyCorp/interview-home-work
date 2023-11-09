"use client";

import { useEffect } from "react";
import Post from "./post/index";
import { Provider, useDispatch, useSelector } from "react-redux";
import { IPost, fetchPostsRequest } from "@/redux/action/post.action";
import { IComment, fetchCommentRequest } from "@/redux/action/comment.action";
import { IUser, fetchUsersRequest } from "@/redux/action/user.action";
import store from "@/redux/store";

// import store from "@/redux/store";
// import { Provider } from "react-redux";

interface initialState {
  posts: IPost[];
  comments: IComment[];
  users: IUser[];
}
export default function Home() {
  const dispath = useDispatch();
  const posts = useSelector((state: initialState) => state.posts);
  const comments = useSelector((state: initialState) => state.comments);
  const users = useSelector((state: initialState) => state.users);

  useEffect(() => {
    dispath(fetchPostsRequest());
    dispath(fetchCommentRequest());
    dispath(fetchUsersRequest());
  }, [dispath]);

  const commentPerPost = posts.map((post) => {
    const comment = comments
      .filter((comment) => comment.postId == post.id)
      .map((comment) => ({
        ...comment,
        user: users.find((user) => user.name === comment.name),
      }));
    return {
      ...post,
      comments: comment,
      user: users.find((user) => user.name === post.name),
    };
  });

  return (
    <div>
      {posts.map((data) => (
        <Post data={data} key={data.id} />
      ))}
    </div>
  );
}
