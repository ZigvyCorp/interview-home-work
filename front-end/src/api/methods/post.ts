import instance from "@/api/axios-instance.ts";
import { PostDto } from "@/api/models/post-dto.ts";
import { CreatePostDto } from "@/api/models/create-post-dto.ts";

export const getPosts = async (page: number, limit: number) => {
  const { data } = await instance.get<{
    total: number;
    posts: PostDto[];
  }>("/posts", {
    params: { page, limit },
  });
  return data;
};
export const getPostByIdOrSlug = async (idOrSlug: string) => {
  const { data } = await instance.get<PostDto>(`/posts/${idOrSlug}`);
  return data;
};
export const createPost = async (createData: CreatePostDto) => {
  const { data } = await instance.post<PostDto>(`/posts`, createData);
  return data;
};
export const updatePost = async ({
  id,
  data: updateData,
}: {
  id: string;
  data: Partial<PostDto>;
}) => {
  const { data } = await instance.put<PostDto>(
    `/posts/${id}`,
    updateData
  );
  return data;
};
export const deletePost = async (id: string) => {
  const { data } = await instance.delete(`/posts/${id}`);
  return data;
};
