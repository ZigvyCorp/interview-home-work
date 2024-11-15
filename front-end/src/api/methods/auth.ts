import instance from "@/api/axios-instance.ts";
import { UserDto } from "@/api/models/user-dto.ts";
import axios from "axios";

export const login = async ({ username, password }: { username: string; password: string }) => {
  const { data } = await instance.post("/auth/login", { username, password });
  return data;
};
export const logout = async () => {
  const { data } = await instance.post("/auth/logout");
  return data;
};
export const getLoggedUser = async () => {
  const { data } = await instance.get<UserDto>("/auth/logged-user");
  return data;
};
export const getRefreshToken = async () => {
  const { data } = await axios.post(import.meta.env.VITE_API_URL + "/auth/refresh-token", {}, {
    withCredentials: true
  });
  return data;
};