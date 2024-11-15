import instance from "@/api/axios-instance.ts";
import { PostDto } from "@/api/models/post-dto.ts";
import { CreatePostDto } from "@/api/models/create-post-dto.ts";

export const getPosts = async () => {
  const { data } = await instance.get<PostDto[]>("/post");
  return data;
};
export const getPostByIdOrSlug = async (
  idOrSlug: string
) => {
  const { data } = await instance.get<PostDto>(`/post/${idOrSlug}`);
  return data;
};
export const createPost = async (createData: CreatePostDto) => {
  const { data } = await instance.post<PostDto>(`/post`, createData);
  return data;
};
export const updatePost = async ({ id, data: updateData }: { id: string; data: Partial<PostDto> }) => {
  const { data } = await instance.put<PostDto>(`/post${id}`, updateData);
  return data;
};
export const deletePost = async (id: string) => {
  const { data } = await instance.delete(`/post${id}`);
  return data;
};
