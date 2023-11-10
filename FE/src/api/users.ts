import { AuthorPayload } from "@/models";
import axiosClient from "./axiosClient";

const url = "/users";

const userApi = {
  getUser(id: number): Promise<AuthorPayload[]> {
    return axiosClient.get(`${url}/${id}`);
  },
};

export default userApi;
