import instance from "@/api/axios-instance.ts";
import { CommentDto } from "@/api/models/comment-dto.ts";
import { CreateCommentDto } from "@/api/models/create-comment-dto.ts";

export const getComments = async (
  postID: string,
  page: number,
  limit: number
) => {
  const { data } = await instance.get<{
    total: number;
    comments: CommentDto[];
  }>(`/posts/${postID}/comments`, {
    params: { page, limit },
  });
  return data;
};
export const createComment = async (createData: CreateCommentDto) => {
  const { data } = await instance.post<CommentDto>(
    `/posts/${createData.postID}/comments`,
    createData
  );
  return data;
};
export const deleteComment = async (id: string) => {
  const { data } = await instance.delete<CommentDto>(
    `/comments/${id}`
  );
  return data;
};
