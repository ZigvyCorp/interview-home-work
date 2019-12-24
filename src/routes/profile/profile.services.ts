import axios from "axios";
import { getEnvs } from "src/shared/utils";

export const api = (access_token: string) =>
  axios.get(`${getEnvs().API_DOMAIN}/users/posts`, {
    headers: { Authorization: "Bearer " + access_token }
  });

export const apiRemovePost = (access_token: string, id: string) =>
  axios.delete(`${getEnvs().API_DOMAIN}/users/post/${id}`, {
    headers: { Authorization: "Bearer " + access_token }
  });
