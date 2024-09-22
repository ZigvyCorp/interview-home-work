import { useQuery } from "@tanstack/react-query";

import { Comment } from "../types";
import axiosInstance from "../utils/axiosInstance";
import { queryKeys } from "./queryKeys";

const fetchData = async ({ postId }: { postId?: number }) => {
  const response = await axiosInstance.get(`/posts/${postId}/comments`);
  return response.data;
};

const useCommentsByPosts = ({ postId }: { postId?: number }) => {
  return useQuery<Comment[]>({
    queryKey: [queryKeys.useCommentsByPosts, { postId }],
    queryFn: () => fetchData({ postId }),
    enabled: !!postId,
  });
};

export default useCommentsByPosts;
