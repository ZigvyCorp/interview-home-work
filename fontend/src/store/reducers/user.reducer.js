import actionTypes from "../actions/actionTypes";

const initState = {
  user: [],
  count: 0,
  loading: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        user: action.user || [],
        loading: action.loading || false,
      };
    default:
      return state;
  }
};

export default userReducer;
