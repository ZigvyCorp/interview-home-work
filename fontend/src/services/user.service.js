import axios from "axios";

export const apiGetUser = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/${id}`
      );
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
