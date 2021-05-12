import axios from "axios";
import { GET__USERS } from "../../types/postComponent";

export const userActions = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "GET",
      });

      dispatch({
        type: GET__USERS,
        userStore: result.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
