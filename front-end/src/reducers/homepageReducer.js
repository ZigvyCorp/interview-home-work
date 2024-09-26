import { FETCH_POST_ERROR, FETCH_POST_PENDING, FETCH_POST_SUCCESS } from "../constants/constant"

const initialState = {
  post:[],
  comment:[]
}
const homepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_PENDING:
      state.pending = true
      break
      case FETCH_POST_SUCCESS:
      state.post=action.payload.result;
      state.comment = action.payload.comment
      console.log(state.post);
      console.log(state.comment);
      
      break
      case FETCH_POST_ERROR:
      console.log("error");
      
      break
    default:
      break
  }
  return { ...state }
}
export default homepageReducer
