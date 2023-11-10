import axios from "axios";
import { url } from "../createInstance";

export const getAllPosts = async () => {
  try {
    const res = await axios.get(`${url}/api/post/posts`, { timeout: 1000 });
    return res;
  } catch (error) {
    console.log(error);
  }
};
