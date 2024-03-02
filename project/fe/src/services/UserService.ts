import { IUser } from "../utils/type.ts";
import { postApi } from "../utils/fetch.ts";
import { apiRoutes } from "../utils/apiRoutes.ts";

export const login = async (data: Pick<IUser, "email" | "password">) => {
  return await postApi(apiRoutes.login, data);
};
export const register = async (data: IUser) => {
  return await postApi(apiRoutes.register, data);
};
