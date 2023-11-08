const initialState = {
  userId: 1,
  id: 1,
  title: '',
  body: '',
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}
