import axios from "axios";

export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/posts`
      );
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetPostsById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/posts/${id}`
      );
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
