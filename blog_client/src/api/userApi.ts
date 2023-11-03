import { User } from "../models/user";
import axiosClient from "./axiosClient";

const userApi = {
  getAll(): Promise<User[]> {
    const url = "/users";
    return axiosClient.get(url);
  },
};

export default userApi;
