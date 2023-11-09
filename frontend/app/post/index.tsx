import React, { useEffect, useState } from "react";
import classes from "./post.module.css";
import Comment from "../comment/index";
import Link from "next/link";
import { IComment, fetchCommentRequest } from "@/redux/action/comment.action";
import { IUser, fetchUsersRequest } from "@/redux/action/user.action";
import { IPost } from "@/redux/action/post.action";
import { useDispatch, useSelector } from "react-redux";

export interface Post {
  data: {
    id: string;
    name: string;
    title: string;
    content: string;
    created_at: number;
  };
}

interface initialState {
  comments: IComment[];
  posts: IPost[];
  users: IUser[];
}

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Post: React.FC<Post> = ({ data }) => {
  const { id, name, title, content, created_at } = data;
  const dispatch = useDispatch();
  const comments = useSelector((state: initialState) => state.comments);
  const users = useSelector((state: initialState) => state.users);

  const [btn, setBtn] = useState(false);
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

      <Link href={`/post/${id}`} className={classes.desc}>
        {content}
      </Link>
      <div className={classes.boxComment}>
        <div onClick={() => setBtn(!btn)}>{commentPerPost.length}</div>
        <hr />
        {btn === true && commentPerPost.map((data, index) => <Comment key={index} data={data} />)}
      </div>
    </section>
  );
};

export default Post;
