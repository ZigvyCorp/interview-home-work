import axios from "axios";
import {
  LOAD_POSTS,
  CREATE_POST,
  DELETE_POST,
  CREATE_COMMENT,
  DELETE_COMMENT,
  SET_PROFILE,
  SET_USER,
  UPDATE_COMMENT,
  UPDATE_POST,
  VIEW_POST,
} from "./actionType";
const url =
  process.env.NODE_ENV === "production"
    ? "/api/"
    : "http://localhost:5000/api/";

export const loadPost = () => {
  axios.get(`${url}post`).then((result) => {
    return {
      type: LOAD_POSTS,
      listPost: result.length > 0 ? result : [],
    };
  }).catch(err=>{
      console.log(err);
  });
};
