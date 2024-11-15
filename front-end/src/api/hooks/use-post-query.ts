import {
  useMutation,
  useQuery,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  createPost,
  deletePost,
  getPostByIdOrSlug,
  getPosts,
  updatePost,
} from "@/api/methods/post.ts";

const QUERY_KEY = ["home", "Post"];

export const useGetPosts = () => {
  const LIMIT = 5;
  return useInfiniteQuery({
    queryKey: [...QUERY_KEY],
    queryFn: async ({ pageParam }) => {
      return await getPosts(pageParam, LIMIT);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const pages = Math.ceil(lastPage.total / LIMIT);
      if (pages <= lastPageParam) return undefined;
      return allPages.length + 1;
    },
  });
};
export const useGetPostByIdOrSlug = (id: string) => {
  return useQuery({
    queryKey: [...QUERY_KEY, { id }],
    queryFn: async () => {
      return await getPostByIdOrSlug(id);
    },
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
};
export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePost,
    onSuccess: (_, variables) => {
      return queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY, variables.id],
      });
    },
  });
};
export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
};
