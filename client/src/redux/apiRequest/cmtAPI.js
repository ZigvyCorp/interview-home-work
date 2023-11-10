import axios from "axios";
import { url } from "../createInstance";

export const getAllCmts = async () => {
  try {
    const res = await axios.get(`${url}/api/comment/comments`, { timeout: 1000 });
    return res;
  } catch (error) {
    console.log(error);
  }
};
