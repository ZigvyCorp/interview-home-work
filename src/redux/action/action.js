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

export function loadPost() {
  return (dispatch) => {
    axios
      .get(`${url}post`)
      .then((res) => {
        let posts = res.data;
        // let payload ={ listPost: res.length > 0 ? res : []};
        dispatch({
          type: LOAD_POSTS,
          payload: {
            posts: posts,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

//title, content, ownerId, tags
export function createPost(obj) {
  return (dispatch) => {
    let data = obj;
    axios
      .post(`${url}post`, data)
      .then((res) => {
        let post = res.data;
        dispatch({
          type: CREATE_POST,
          payload: {post:post}
        });
      
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
