import axios from "axios";
// import dataPost from "../../data/posts.json";
import {
  CLOSE__LOADING,
  GET__POSTS,
  PAGE__LOADING,
  POST__DETAIL,
  POST__SEARCH,
} from "../../types/postComponent";

export const postActions = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: PAGE__LOADING });

      setTimeout(async () => {
        const result = await axios({
          url: "https://jsonplaceholder.typicode.com/posts",
          method: "GET",
        });

        dispatch({
          type: GET__POSTS,
          postStore: result.data,
        });

        dispatch({ type: CLOSE__LOADING });
      }, 500);
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const postDetailAction = (id) => {
  return async (dispatch) => {
    try {
      const reuslt = await axios({
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        method: "GET",
        data: id,
      });

      dispatch({
        type: POST__DETAIL,
        postDetail: reuslt.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const postSearchAction = (keyword) => ({
  type: POST__SEARCH,
  keyword,
});
