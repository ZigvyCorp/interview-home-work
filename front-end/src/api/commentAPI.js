import axios from "axios";
import config from "../config.json";

const apiCommentEndPoint = config.apiEndPoint + "comments";

export async function getCommentsByPostId(id) {
  return axios.get(apiCommentEndPoint + `/post/${id}`);
}
