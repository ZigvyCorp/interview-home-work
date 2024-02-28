
import axiosClient from "./axiosClient";

const URL = "/comment";

const commentApi = {
  getComments() {
    return axiosClient.get(URL);
  },
};

export default commentApi;
