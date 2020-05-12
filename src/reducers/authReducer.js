export default (state = {}, action) => {
  if (action.type === "LOG_IN") {
    return {
      ...state,
      isLoggedIn: action.isLoggedIn,
    };
  }
  return state;
};
