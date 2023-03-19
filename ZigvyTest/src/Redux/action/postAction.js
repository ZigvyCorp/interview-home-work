export default postAction = {
  GET_POST: "GET_POST",
  GET_POST_SUCCESS: "GET_POST_SUCCESS",

  REACT_POST: "REACT_POST",
  REACT_POST_SUCCESS: "REACT_POST_SUCCESS",
};

export function getPost(params = {}) {
  return {
    type: postAction.GET_POST,
    params,
  };
}

export function reactPost(postID = null) {
  return {
    type: postAction.REACT_POST,
    postID,
  };
}
