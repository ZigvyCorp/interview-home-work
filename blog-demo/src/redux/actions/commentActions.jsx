import {
  ADD__COMMENT,
  DETAIL__COMMENT,
  GET__COMMENTS,
} from "../../types/postComponent";
import axios from "axios";

export const commentsActions = () => {
  return async (dispatch) => {
    const result = await axios({
      url: "https://jsonplaceholder.typicode.com/comments",
      method: "GET",
    });

    dispatch({
      type: GET__COMMENTS,
      commentsStore: result.data,
    });

    try {
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const commentDetailActions = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
        method: "GET",
      });

      dispatch({
        type: DETAIL__COMMENT,
        commentDetail: result.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const addCommentAction = (comment) => ({
  type: ADD__COMMENT,
  comment,
});
