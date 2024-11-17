import { useQuery } from "@tanstack/react-query";
import postsApi from "../api/posts.api";
import { IGetAllPosts } from "../types/posts";

export const usePostsById = (id: string) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => postsApi.getPostsById(id),
    enabled: !!id,
  });
};

export const usePosts = (payload: IGetAllPosts) => {
  return useQuery({
    queryKey: ["posts", payload.page, payload.limit, payload.search],
    queryFn: () =>
      postsApi.getAllPosts({
        page: payload.page,
        limit: payload.limit,
        search: payload.search,
      }),
  });
};
