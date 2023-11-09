import axios from "axios";
import { url } from "../createInstance";

export const getUser = async (username) => {
  try {
    const res = await axios.get(`${url}/api/user/username/${username}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
