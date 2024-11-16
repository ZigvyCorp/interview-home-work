import { Divider } from "antd";
import { map } from "lodash";
import React from "react";
import PostsCard from "../../components/posts/PostCard";
import { usePosts } from "../../hooks/usePosts";
import { IPosts } from "../../types/posts";

const HomePage: React.FC = () => {
  const { data: posts, isLoading, isError } = usePosts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading posts.</p>;

  return (
    <div className="p-4 flex flex-col">
      {map(posts.data, (post: IPosts, index: number) => (
        <React.Fragment key={post.id}>
          <PostsCard post={post} />
          {index < posts.data.length - 1 && <Divider className="bg-black" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default HomePage;
