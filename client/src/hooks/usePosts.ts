import { useQuery } from "@tanstack/react-query";
import postsApi from "../api/posts.api";

export const usePostsById = (id: string) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => postsApi.getPostsById(id),
    enabled: !!id,
  });
};

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => postsApi.getAllPosts(),
  });
};
