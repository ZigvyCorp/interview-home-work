import api from "./api";

const postAPI = {
  getPosts: () => {
    let url = "post";
    return api.get(url);
  },
};
export default postAPI;
