import { ActionType } from "../../../libs/commonTypes"
import { PostDetailDataType } from "../../../pages/posts/model"
import { GET_POST_DETAIL_DATA_REDUX } from "../../constants"

type PostDetailIntialState = {
    postDetail: PostDetailDataType | null
}

const initialState:PostDetailIntialState = {
    postDetail: null
}

const postDetailReducer = (state = initialState, action: ActionType<PostDetailDataType>) => {
  switch (action.type) {

  case GET_POST_DETAIL_DATA_REDUX:
    return { ...state, postDetail: action.payload }

  default:
    return state
  }
}


export default postDetailReducer