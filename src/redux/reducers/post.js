let initialState = {
    post: [],
  };
  
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_POST":
        state.post = payload;
        return { ...state };




      default:
        return state;
    }
  };
  
  export default reducer;
  