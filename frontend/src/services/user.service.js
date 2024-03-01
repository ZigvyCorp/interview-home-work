import { USER_URL } from "../configs";
import axiosClient from "./axios-client";

export const userServices = { getUserById  } 

function getUserById(id) {
  return axiosClient.get(`${USER_URL}/${id}`);
}