export default function postReducer(
  state = {
    post: [],
  },
  action
) {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
}
