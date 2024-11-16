import { useQuery } from "@tanstack/react-query";
import { map } from "lodash";
import React from "react";
import postsApi from "../../api/posts.api";
import PostsCard from "../../components/posts/PostCard";

const HomePage: React.FC = () => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery(["posts"], () => postsApi.getAllPosts());

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading posts.</p>;

  return (
    <div className="p-4 flex flex-col gap-8">
      {map(posts.data, (post: any) => (
        <PostsCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
