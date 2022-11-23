const initialState = {
  data: [],
  comments: [],
};

const ActionHandle = (state = initialState, action) => {
  switch (action.type) {
    case "BLOG": {
      return {
        ...state,
        data: action.data,
      };
    }
    case "COMMENTS": {
      return {
        ...state,
        comments: action.comments,
      };
    }
    default:
      return state;
  }
};
export default ActionHandle;
