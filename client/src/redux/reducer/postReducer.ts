
const initialState: Post[] = []

export function postReducer(state = initialState, action: ReduxAction) {
  switch (action.type) {
    case 'post/fetchPost':
      return { ...state, value: state }
    case 'post/createPost':
      return { ...state, value: state }
    default:
      return state
  }
}