import React from "react";
import Comment from "./comment";
import Content from "./content";

const Post = ({ data }) => {
  return (
    <div className="mx-3 postItem">
      <Content
        title={data.title}
        owner={data.owner}
        content={data.content}
        created_at={data.created_at}
      />
      <Comment />
    </div>
  );
};

export default Post;
