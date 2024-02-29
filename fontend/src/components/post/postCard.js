import React, { useState } from "react";
import { Card } from "antd";
import { CommentList } from "../../containers";
import { Link } from "react-router-dom";

const PostCard = (post, key) => {
  const [showComments, setShowComments] = useState(false);
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  return (
    <div className="w-full mt-5 mb-5">
      <Card
        key={key}
        className="w-[90%] mx-auto rounded-0 border-white"
        actions={[
          post.posts?.comments?.length > 0 && (
            <button
              className="text-[1.1rem] border-b-3 cursor-pointer border-slate-400 underline bg-none border-none"
              onClick={toggleComments}
            >
              {showComments ? "Hide Comments" : "Show Comments"}
            </button>
          ),
        ]}
      >
        <h1 className="text-4xl font-medium mb-3">
          <Link to={`/${post.posts?._id}`}>{post.posts?.title}</Link>
        </h1>
        <div className="flex flex-col text-2xl font-normal justify-start items-start mb-4">
          <span>Author: {post.posts.user.name}</span>
          <span>Created at: {post.posts.createAt}</span>
        </div>
        <p className="text-justify text-2xl mb-8">{post.posts.body}</p>
        <span className="flex w-full text-xl font-normal text-slate-500 text-left ml-0">
          {post.posts?.comments?.length} replies
        </span>
        {showComments && post?.posts?.comments?.length > 0 ? (
          <CommentList comment={post.posts.comments} />
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default PostCard;
