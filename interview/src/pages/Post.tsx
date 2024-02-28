import { FC } from "react";
import { useSelector } from "react-redux";

import Post from "../components/Post/Post";
import Header from "../layouts/component/header";

import { tags } from "../ultis/tagData";

const SinglePost: FC = () => {
  const post = useSelector((value: any) => value.post.post);


  return (
    <div className="d-flex flex-column">
      <Header />

      <div className="mb-auto mt-auto flex-fill">
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          authorId={post.userId}
          content={post.body}
          comments={post.comments}
          tags={tags}
          user={post.user}
        />
      </div>
    </div>
  );
};

export default SinglePost;
