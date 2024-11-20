import { client } from "../config";

export const getCommentByPostId = async (postId: string | number) => {
  const { data } = await client.get(`comments?postId=${postId}`);
  return data;
};
