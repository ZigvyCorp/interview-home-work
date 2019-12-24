import axios from "axios";
import { getEnvs } from "src/shared/utils";

export const api = (data: { username: string; password: string }) =>
  axios.post(`${getEnvs().API_DOMAIN}/users/sign-in`, data);
