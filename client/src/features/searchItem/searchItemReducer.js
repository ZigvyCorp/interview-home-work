import { SET_SEARCH_ITEM } from "./actionTypes";

const initialState = {
  searchItem: [],
  isLoading: false,
  error: null,
};

const searchItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_ITEM:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default searchItemReducer;
