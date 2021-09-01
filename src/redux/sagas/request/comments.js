import axios from "axios";

export function requestGetComments() {
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/comments?"
  });
}