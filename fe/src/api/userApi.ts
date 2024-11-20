import { User } from "../models/UserModel";
import axiosClient from "./axiosClient";

const URL = "user";

const userApi = {
  login(body: User) {
    return axiosClient.post(URL + "/login", body);
  },
};

export default userApi;
