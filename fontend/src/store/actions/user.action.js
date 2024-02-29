import { apiGetUser } from "../../services/user.service";
import actionTypes from "./actionTypes";

export const getUserById = (id) => async (dispatch) => {
  try {
    const response = await apiGetUser(id);
    if (response?.data.statusCode === 200) {
      dispatch({
        type: actionTypes.CREATE_COMMENT,
        loading: true,
      });
    } else {
      dispatch({
        type: actionTypes.CREATE_COMMENT,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.CREATE_COMMENT,
      posts: null,
    });
  }
};
