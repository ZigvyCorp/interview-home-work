import React from "react";
import CommentList from "./comment";
import Content from "./content";

const Post = ({ data, comments }) => {
  return (
    <div className="mx-3 pb-3 postItem">
      <Content
        title={data.title}
        owner={data.owner}
        content={data.content}
        created_at={data.created_at}
      />
      <CommentList comments={comments} />
    </div>
  );
};

export default Post;
