import apiService from "./apiService";

const BASE_USERS_URL = "/users";

const userApi = {
  getUser: async (q, value) => {
    try {
      const data = await apiService.get(`${BASE_USERS_URL}?${q}=${value}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  getAllUsers: async () => {
    try {
      const data = await apiService.get(BASE_USERS_URL);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default userApi;
