import axios from "axios";
import { FETCH_COMMENT, FETCH_POSTS } from "../constants";

export const fetchPost = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    dispatch({
      type: FETCH_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchComments = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments`
    );
    dispatch({
      type: FETCH_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
