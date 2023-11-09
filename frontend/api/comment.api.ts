import api from "./api";

const commentAPI = {
  getComments: (id: string) => {
    let url = `/comments/${id}`;
    return api.get(url);
  },
};
export default commentAPI;
