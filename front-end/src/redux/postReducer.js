const initState = {
  posts: [],
  post: {}
}

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.payload
      }
    case "FETCH_POST_BY_ID":
      return {
        ...state,
        post: action.payload
      }
    default:
      return state
  }
}
