import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, deletePost, getPostByIdOrSlug, getPosts, updatePost } from "@/api/methods/post.ts";

const QUERY_KEY = ["home", "Post"];

export const useGetPosts = () => {
  return useQuery({
    queryKey: [...QUERY_KEY],
    queryFn: async () => {
      return await getPosts();
    },
    throwOnError: true
  });
};
export const useGetPostByIdOrSlug = (id: string) => {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: async () => {
      return await getPostByIdOrSlug(id);
    }
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    }
  });
};
export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePost,
    onSuccess: (_, variables) => {
      return queryClient.invalidateQueries({ queryKey: [...QUERY_KEY, variables.id] });
    }
  });
};
export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    }
  });
};
