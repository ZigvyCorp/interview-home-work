export default postAction = {
  GET_POST: "GET_POST",
  GET_POST_SUCCESS: "GET_POST_SUCCESS",
};

export function getPost(params = {}) {
  return {
    type: postAction.GET_POST,
    params,
  };
}
