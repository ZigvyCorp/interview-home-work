const initState = {
    search: {
        query: '',
    },
    content:{
        id: '',
        posts: [],
        showComments: {},
    },  

}

const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case 'SEARCH':
      return {
        ...state,
        search: {
          query: action.payload,
        },
      };
    case 'FETCH_POSTS':
      return {
        ...state,
        content: {
          ...state.content,
          posts: action.payload,
        },
      };
    case 'TOGGLE_COMMENTS':
      return {
        ...state,
        content: {
          ...state.content,
          showComments: {
            ...state.content.showComments,
            [action.payload]: !state.content.showComments[action.payload],
          },
        },
      };
    default:
      return state;
  }
}
export default rootReducer;