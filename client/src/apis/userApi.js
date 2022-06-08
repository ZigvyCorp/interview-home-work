import apiService from "./apiService";

const BASE_USERS_URL = "/users";

const userApi = {
  getUsers: async () => {
    try {
      const data = await apiService.get(BASE_USERS_URL);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default userApi;
