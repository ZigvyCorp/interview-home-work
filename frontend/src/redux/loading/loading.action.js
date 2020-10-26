import { createAction } from "redux-actions";
import { ADD_LOADING, REMOVE_LOADING, REMOVE_ALL_LOADING } from "./loading.type"

export const addLoading = createAction(
    ADD_LOADING,
    key => key
);

export const removeLoading = createAction(
    REMOVE_LOADING,
    key => key
)

export const removeAllLoading = createAction(
    REMOVE_ALL_LOADING
)