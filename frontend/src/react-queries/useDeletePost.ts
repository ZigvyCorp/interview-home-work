import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Post } from "../types";
import axiosInstance from "../utils/axiosInstance";
import { queryKeys } from "./queryKeys";

const fetchData = async ({ id }: { id?: number }) => {
  const response = await axiosInstance.delete(`/posts/${id}`);
  return response.data;
};

const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id?: number; page?: number }) => fetchData({ id }),
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({
        queryKey: [queryKeys.useInfinitePosts],
      });

      const previousPosts = queryClient.getQueryData<{
        pages: Post[][];
        pageParams: number[];
      }>([queryKeys.useInfinitePosts]);

      queryClient.setQueryData<
        { pages: Post[][]; pageParams: number[] } | undefined
      >([queryKeys.useInfinitePosts], (old) => {
        if (!old) return undefined;
        return {
          ...old,
          pages: old.pages.map((pageData) =>
            pageData.filter((post: Post) => post.id !== id),
          ),
        };
      });

      return { previousPosts };
    },

    onError: (err, variables, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(
          [queryKeys.useInfinitePosts],
          context.previousPosts,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.useInfinitePosts] });
    },
  });
};

export default useDeletePost;
