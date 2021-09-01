import axios from "axios";

export function requestGetUsers() {
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users"
  });
}