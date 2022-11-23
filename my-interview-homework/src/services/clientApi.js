import instance from "./axiosClient";

export const clientApi = {
  getAll: async (endpoint) => {
    return await instance.get(endpoint);
  },
};
