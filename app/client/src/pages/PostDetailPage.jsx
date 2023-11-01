/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Collapse, Spin } from "antd";
import React, { useMemo } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getAllCommentsByPostId } from "../services/commentService";
import { getPostById } from "../services/postService";
import { getUserById } from "../services/userService";
import moment from "moment";

export async function postLoader({ params }) {
  try {
    const data = await getPostById(params.postId);
    if (!data.status) {
      return null;
    }
    const post = data.data;
    const userRes = await getUserById(post.userId);
    const commentsRes = await getAllCommentsByPostId(post.id);

    return {
      ...post,
      user: userRes?.data,
      comments: commentsRes?.data?.list || [],
    };
  } catch (error) {
    return null;
  }
}

const PostDetailPage = () => {
  const post = useLoaderData();

  const collapseItems = useMemo(() => {
    const comments = post?.comments || [];
    return [
      {
        key: "1",
        label: `${comments.length} repl${comments.length > 1 ? "ies" : "y"}`,
        children: (
          <div>
            {comments.map((comment, index) => (
              <div key={comment.id}>
                <div className="font-bold">User: {comment.name}</div>
                <div>{comment.email}</div>
                <div className="mt-3">{comment.body}</div>
                {index === comments.length - 1 ? null : <hr className="mb-3 mt-1" />}
              </div>
            ))}
          </div>
        ),
      },
    ];
  }, [post]);

  // Loading
  if (!post) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="p-10 max-w-[1100px]">
      <Link to="/">
        <Button type="link" className="p-0">
          <div className="font-bold text-[14px]">Go Back</div>
        </Button>
      </Link>
      <div>
        <div className="text-xl font-bold text-center mb-10">{post.title}</div>
        <div>
          <b>Author: </b>
          {post.user?.name}
        </div>
        <div>
          <b>Created at: </b>
          {moment(post.createdAt).format("DD-MM-YYYY")}
        </div>
        <div className="mt-5">{post.body}</div>
      </div>
      <div className="mt-5">
        <Collapse items={collapseItems} />
      </div>
    </div>
  );
};

export default PostDetailPage;
