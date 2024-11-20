import axios from "../axios";

export const apiGetUser = (id: any) =>
  axios({
    url: `/users/${id}`,
    method: "get",
  });
