import postService from "../services/post";

export const ADD_POST = "ADD_POST";
export const GET_POST = "GET_POST";

export function add_post(post) {
  return (dispatch) => {
    postService.add_post(post).then(data => {
      dispatch({
        type: ADD_POST,
        payload: data
      })
    });
  }
}

export function get_post() {
  return (dispatch) => {
    postService.get_post().then(postList => {
      dispatch({
        type: GET_POST,
        payload: postList
      })
    })
  }
}
