import axios from "axios";
import { getEnvs } from "src/shared/utils";

export const api = (id: string) =>
  axios.get(`${getEnvs().API_DOMAIN}/post/${id}`);
