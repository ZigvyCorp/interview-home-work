import { client } from "../config";

export const getAllPosts = async () => {
  const { data } = await client.get(`/posts`);
  return data;
};

export const getPostById = async (id: string) => {
  const { data } = await client.get(`/posts/${id}`);
  return data;
};
