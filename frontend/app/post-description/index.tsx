import React, { useEffect } from "react";
import { Post } from "../post";
import classes from "./post-description.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { IComment, fetchCommentRequest } from "@/redux/action/comment.action";
import { IUser, fetchUsersRequest } from "@/redux/action/user.action";
import Comment from "../comment/index";
import { IPost } from "@/redux/action/post.action";

interface initialState {
  comments: IComment[];
  posts: IPost[];
  users: IUser[];
}

const PostDescription: React.FC<Post> = ({ data }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state: initialState) => state.comments);
  const users = useSelector((state: initialState) => state.users);
  const { id, name, title, content, created_at } = data;

  useEffect(() => {
    dispatch(fetchCommentRequest());
    dispatch(fetchUsersRequest());
  }, []);

  const commentPerPost = comments.filter((comment) => comment.postId == id);
  const userComment = users.find((user) => user.username == name);

  return (
    <section className={classes.blog}>
      <div className={classes.info}>
        <div>
          <div>Author: {name}</div>
          <div>Created at: {created_at}</div>
        </div>
      </div>
      <h1>{title}</h1>

      <div className={classes.desc}>{content}</div>
      <div className={classes.boxComment}>
        <hr />
        {commentPerPost.map((data, index) => (
          <Comment key={index} data={data} />
        ))}
      </div>
    </section>
  );
};

export default PostDescription;
