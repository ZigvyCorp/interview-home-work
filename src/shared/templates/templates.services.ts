import axios from "axios";
import { getEnvs } from "src/shared/utils";

export const api = () => axios.get(`${getEnvs().API_DOMAIN}/`);
