let initialState = {
    combineData: [],
  };
  
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_COMBINE_DATA":
        state.combineData = payload;
        return { ...state };

      case "SEARCH":
        return {...state};
      default:
        return state;
    }
  };
  
  export default reducer;
  