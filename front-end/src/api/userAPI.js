import axios from "axios";
import config from "../config.json";

const apiCommentEndPoint = config.apiEndPoint + "users";

export async function getUsers() {
  return axios.get(apiCommentEndPoint);
}
