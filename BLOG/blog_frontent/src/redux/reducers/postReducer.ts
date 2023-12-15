import { RootState } from "../store/configStore";
import { PostStatusType } from "types/postType";
import {
    GET_POST,
    GET_POST_FAILURE, GET_POST_SUCCESS
} from "constants/actionRedux";
import {
    PostAction, getPostSucces
} from "../actions/postActions";

const initialState: PostStatusType = {
    post: null,
    loading: false,
};

const postReducer = (state = initialState, action: PostAction) => {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                loading: true,
            };
        case GET_POST_SUCCESS:
            const successAction = action as ReturnType<typeof getPostSucces>;
            return {
                ...state,
                post: successAction.payload,
                loading: false,
            };
        case GET_POST_FAILURE:
            return {
                ...state,
                loading: false,
            }; 
        default:
            return state;
    }
};

export const selectPost = (state: RootState) => state.post.post;
export const selectPosLoading = (state: RootState) => state.post.loading; 

export default postReducer;
