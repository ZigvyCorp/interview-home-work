import { Types } from "./Types"

const initState = {
  comments: [],
  comment: {}
}

export const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.fetchCommentByPostId:
      return {
        ...state,
        comments: action.payload
      }
    default:
      return state
  }
}
