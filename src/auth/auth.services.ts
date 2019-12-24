import axios from "axios";
import { getEnvs } from "src/shared/utils";

export const api = (access_token = "") =>
  axios.get(`${getEnvs().API_DOMAIN}/users/auth`, {
    headers: { Authorization: "Bearer " + access_token }
  });
