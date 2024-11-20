import axios from "axios";
import { url } from "../createInstance";

export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${url}/api/user/users`, { timeout: 1000 });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (username) => {
  try {
    const res = await axios.get(`${url}/api/user/username/${username}`, {
      timeout: 1000,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
