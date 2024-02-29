export default function appReducer(
  state = {
    globalLoading: false,
  },
  action
) {
  switch (action.type) {
    case 'SET_GLOBAL_LOADING':
      return {
        ...state,
        globalLoading: action.payload,
      };
    default:
      return state;
  }
}
