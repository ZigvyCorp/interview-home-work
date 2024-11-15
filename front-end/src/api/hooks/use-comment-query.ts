import {
  InfiniteData,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import {
  createComment,
  deleteComment,
  getComments,
} from "@/api/methods/comment.ts";
import { CommentDto } from "@/api/models/comment-dto.ts";
import { useAuth } from "@/providers/auth-provider.tsx";
function splitCommentArray(
  arr: CommentDto[],
  itemSize: number,
  arraySize: number,
  total: number
) {
  const result: { total: number; comments: CommentDto[] }[] = [];
  for (let i = 0; i < arr.length; i += itemSize) {
    if (result.length === arraySize) {
      break;
    }
    result.push({
      total: total,
      comments: arr.slice(i, i + itemSize),
    });
  }
  return result;
}
const QUERY_KEY = ["home", "Comment"];
const LIMIT = 5;
export const useGetComments = (postID: string) => {
  return useInfiniteQuery({
    queryKey: [...QUERY_KEY, { postID }],
    queryFn: async ({ pageParam }) => {
      return await getComments(postID, pageParam, LIMIT);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const pages = Math.ceil(lastPage.total / LIMIT);
      if (pages <= lastPageParam) return undefined;
      return allPages.length + 1;
    },
  });
};

export const useCreateComment = () => {
  const auth = useAuth();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createComment,
    onMutate: async (newComment) => {
      const queryKey = [...QUERY_KEY, { postID: newComment.postID }];
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey });
      // Snapshot the previous value
      const previousComments = queryClient.getQueryData(
        queryKey
      ) as InfiniteData<
        { total: number; comments: CommentDto[] },
        unknown
      >;
      // Optimistically update to the new value
      const newData: CommentDto = {
        content: newComment.content,
        postID: newComment.postID,
        createdAt: new Date().toISOString(),
        id: `${new Date().getMilliseconds()}`,
        owner: auth.loggedUser!,
      };
      const allComments = [
        newData,
        ...previousComments.pages.flatMap((x) => x.comments),
      ];
      const lastPageTotal =
        previousComments.pages[previousComments.pages.length - 1]
          .total;
      const splitted = splitCommentArray(
        allComments,
        LIMIT,
        previousComments.pageParams.length,
        lastPageTotal
      );
      queryClient.setQueryData(
        queryKey,
        () =>
          ({
            pageParams: previousComments.pageParams,
            pages: splitted,
          } as InfiniteData<
            { total: number; comments: CommentDto[] },
            unknown
          >)
      );
      // Return a context object with the snapshotted value
      return { previousComments };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (_, newComment, context) => {
      const queryKey = [...QUERY_KEY, { postID: newComment.postID }];
      queryClient.setQueryData(queryKey, context?.previousComments);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
};
export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
};
