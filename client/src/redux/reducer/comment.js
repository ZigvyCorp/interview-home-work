export default function commentReducer(
  state = {
    comment: {},
  },
  action
) {
  switch (action.type) {
    case 'SET_COMMENT':
      return {
        ...state,
        comment: action.payload,
      };
    default:
      return state;
  }
}
