import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com'

export const getPosts = async (search) => {
  const res = await axios.get(
    `${URL}​/posts`)
  return res;
};