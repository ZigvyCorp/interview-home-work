import axiosService from "../utils/axiosService";

export const loginApi = (username, password) => {
  return axiosService.post("/auth/login", { username, password });
};

export const registerApi = (username, password, name, dob) => {
  return axiosService.post("/auth/register", { username, password, name, dob });
};
