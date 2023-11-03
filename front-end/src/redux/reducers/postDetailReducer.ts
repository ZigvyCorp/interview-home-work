import { PayloadAction } from "../../interfaces/BaseReduxAction";
import { PostResponse } from "../../interfaces/response/PostResponse";
import { GET_POST_DETAIL } from "../actions/postDetailAction";

export interface PostInitialState {
    data: PostResponse;
}

export const initialState: PostInitialState = {
    data: {
        id: 0,
        owner: 0,
        ownerName: "",
        title: "",
        content: "",
        createdAt: 0,
        tags: [],
        totalComments: 0,
        comments: []
    }
};


const postDetailReducer = (state = initialState, actions: PayloadAction<PostResponse>) => {
    switch (actions.type) {
        case GET_POST_DETAIL: {
            state.data = actions.payload;
            return { ...state, requesting: true };
        }
        default:
            return state;
    }
}

export { postDetailReducer }