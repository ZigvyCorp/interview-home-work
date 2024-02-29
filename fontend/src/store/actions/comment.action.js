import { apiCreateComment } from "../../services/comment.service";
import actionTypes from "./actionTypes";

export const createComment =
  ( id, payload, postId ) =>
  async (dispatch) => {
    try {
      const response = await apiCreateComment( id, payload, postId );
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
