let initialState = {
    comment: [],
  };
  
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_COMMENT":
        state.comment = payload;
        return { ...state };




      default:
        return state;
    }
  };
  
  export default reducer;
  