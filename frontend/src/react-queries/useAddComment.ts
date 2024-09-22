import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AddCommentForm } from "../types";
import axiosInstance from "../utils/axiosInstance";
import { queryKeys } from "./queryKeys";

const fetchData = async (form: AddCommentForm) => {
  const response = await axiosInstance.post(`/comments`, form);
  return response.data;
};

const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (form: AddCommentForm) => fetchData(form),
    onMutate: async (form) => {
      await queryClient.cancelQueries({
        queryKey: [queryKeys.useCommentsByPosts, { postId: form.postId }],
      });

      const previousComments = queryClient.getQueryData([
        queryKeys.useCommentsByPosts,
        { postId: form.postId },
      ]);

      queryClient.setQueryData(
        [queryKeys.useCommentsByPosts, { postId: form.postId }],
        (old: any) => {
          if (!old) return undefined;
          return [
            {
              id: form.id,
              user: { id: form.userId, name: form.name },
              body: form.body,
            },
            ...old,
          ];
        },
      );

      return { previousComments };
    },

    onError: (err, variables, context) => {
      if (context?.previousComments) {
        queryClient.setQueryData(
          [queryKeys.useCommentsByPosts, { postId: variables.postId }],
          context.previousComments,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.useInfinitePosts] });
    },
  });
};

export default useAddComment;
