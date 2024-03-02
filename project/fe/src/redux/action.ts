import { IBlog, IUser } from "../utils/type.ts";

export const login = (data: Pick<IUser, "email" | "password">) => ({
  type: "LOGIN",
  payload: data,
});
export const register = (data: IUser) => ({
  type: "REGISTER",
  payload: data,
});
export const logout = () => ({
  type: "LOGOUT",
});
export const createBlog = (data: IBlog) => ({
  type: "CREATE_BLOG",
  payload: data,
});
