import axios from "axios";
import { url } from "../createInstance";

export const getAllPosts = async () => {
  try {
    const res = await axios.get(`${url}/api/post/posts`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
