let initialState = {
    user: [],
  };
  
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_USER":
        state.user = payload;
        return { ...state };




      default:
        return state;
    }
  };
  
  export default reducer;
  