import axiosInstance from "../configs/axios";
import { IAuth, ILogin } from "../types/auth";

const authApi = {
  async login(payload: ILogin) {
    const res = await axiosInstance.post("/auth/login", {
      ...payload,
    });
    return res as unknown as IAuth;
  },
};

export default authApi;
