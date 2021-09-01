import { handleGetComments } from "../sagas/handles/comments";

export const GET_COMMENTS = "GET_COMMENTS";
const SET_COMMENTS = "SET_COMMENTS";

export const getComments = () => ({
  type: GET_COMMENTS
});

export const setComments = (comments) => ({
  type: SET_COMMENTS,
  comments
});

const initialState = {
    comments: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      const { comments } = action;
      return { ...state, comments };
    default:
      return state;
  }
};