import axios from "axios";

export const apiCreateComment = (id, payload, postId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/comments`,
        {
          body: payload,
          postId: postId,
        },
        {
          headers: {
            "x-user-id": id,
          },
        }
      );
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
