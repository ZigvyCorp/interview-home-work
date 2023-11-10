import { http } from "./axios";

export const getUserRequest = () => {
  return http.get("/user");
};

