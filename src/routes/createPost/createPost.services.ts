import axios from "axios";
import { getEnvs } from "src/shared/utils";

export const api = (data: any, access_token: string) =>
  axios.put(`${getEnvs().API_DOMAIN}/post`, data, {
    headers: { Authorization: "Bearer " + access_token }
  });
