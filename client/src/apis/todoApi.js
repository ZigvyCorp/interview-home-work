import apiService from "./apiService";

const BASE_TODOS_URL = "/todos";

const todoApi = {
  getTodos: async () => {
    try {
      const data = await apiService.get(BASE_TODOS_URL);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default todoApi;
