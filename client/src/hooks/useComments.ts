import { useQuery } from "@tanstack/react-query";
import postsApi from "../api/posts.api";

export const useCommentsByPosts = ({
  id,
  page,
  limit,
}: {
  id: string;
  page: number;
  limit: number;
}) => {
  return useQuery({
    queryKey: ["comments", id, page, limit],
    queryFn: () => postsApi.getAllCommentByPostsId(id, page, limit),
    enabled: !!id,
  });
};
