import { FETCH_COMMENTS_ERR, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from "../action/comment.action";

const commentReducer = (state: any, action: any) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return { ...state, comment: action.payload };
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, comment: action.payload };
    case FETCH_COMMENTS_ERR:
      return { ...state, comment: action.payload };
    default:
      return state;
  }
};
export default commentReducer;
