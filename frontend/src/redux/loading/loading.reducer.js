import { removeLoading, addLoading, removeAllLoading } from "./loading.action";
import { handleActions } from "redux-actions";

export const initialLoadingState = {
    isLoading: false,
    keys: []
}

export const loadingReducer = handleActions(
    new Map([
        [
            addLoading,
            (state, action) => ({
                isLoading: true,
                keys: [...state.keys, action.payload]
            })
        ],
        [
            removeLoading,
            (state, action) => {
                const newKeys = [...state.keys.filter(k => k !== action.payload)]
                return {
                    isLoading: newKeys.length > 0,
                    keys: [...newKeys],
                };
            }
        ],
        [
            removeAllLoading,
            () => ({
                isLoading: false,
                keys: []
            })
        ]
    ]),
    initialLoadingState
)