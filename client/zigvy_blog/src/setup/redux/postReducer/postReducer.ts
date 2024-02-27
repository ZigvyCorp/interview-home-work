// import { ActionType } from "../../../libs/commonTypes";
// import { PostDataType } from "../../../pages/posts/model";
// import {
//   GET_POST_DATA_REDUX,
//   GET_POST_DATA_REDUX_FAILED,
// } from "../../constants";

// type GetPostDataType = {
//   postsData: PostDataType[] | null;
// };
// const initialState: GetPostDataType = {
//   postsData: null,
// };

// const postReducer = (state = initialState, action: ActionType<PostDataType[]>) => {
//   switch (action.type) {
//     case GET_POST_DATA_REDUX:

//       return { ...state, postsData: action.payload };
//     case GET_POST_DATA_REDUX_FAILED:
//       return { ...state, postsData: null };
//     default:
//       return state;
//   }
// };

// export default postReducer

import { ActionType } from "../../../libs/commonTypes";
import { PostDataType } from "../../../pages/posts/model";
import {
  GET_POST_DATA_REDUX,
  GET_POST_DATA_REDUX_FAILED,
  SEARCH_POST_SUCCESS_REDUX,
  SEARCH_POST_SUCCESS_REDUX_EMPTY,
} from "../../constants";

type GetPostDataType = {
  postsData: PostDataType[] | null;
};
const initialState: GetPostDataType = {
  postsData: null,
};

const postReducer = (
  state = initialState,
  action: ActionType<PostDataType[]>
) => {
  switch (action.type) {
    case GET_POST_DATA_REDUX:
      // Check if postsData already has data
      // eslint-disable-next-line no-case-declarations
      const newData = action.payload;
      // eslint-disable-next-line no-case-declarations
      const updatedData = state.postsData
        ? [...state.postsData, ...newData]
        : newData;
      return { ...state, postsData: updatedData };
    case GET_POST_DATA_REDUX_FAILED:
      return { ...state, postsData: null };
    case SEARCH_POST_SUCCESS_REDUX:
      return { ...state, postsData: action.payload };
    case SEARCH_POST_SUCCESS_REDUX_EMPTY:
      return { ...state, postsData: action.payload };
    default:
      return state;
  }
};

export default postReducer;
