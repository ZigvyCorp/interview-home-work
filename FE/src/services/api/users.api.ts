import { client } from "../config";

export const getAllUsers = async () => {
  const { data } = await client.get(`/users`);
  return data;
};
