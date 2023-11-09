import { postIdTypes } from "../../actions-types/postTypes";
import { PostIdAction, PostIdState } from "../../types/post/typesId";

const initialState: PostIdState = {
  loading: false,
  post: {
    userId: 0,
    id: 0,
    title: "",
    body: "",
  },
  error: null,
};

export default (state = initialState, action: PostIdAction) => {
  switch (action.type) {
    case postIdTypes.FETCH_POST_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case postIdTypes.FETCH_POST_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload.post,
        error: null,
      };
    case postIdTypes.FETCH_POST_ID_FAILURE:
      return {
        ...state,
        loading: false,
        posts: {},
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
