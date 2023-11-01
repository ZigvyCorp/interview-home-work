import { http } from "./httpService";

export const getUserById = async (id) => {
  const response = await http.get(`/users/${id}`);
  return response.data;
};
