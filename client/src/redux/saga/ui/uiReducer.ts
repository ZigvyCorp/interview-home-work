import { GLOBAL_LOADING } from "../action"

interface IUIAction {
    type: string
    isLoading: boolean
    isLoadingPostComment: boolean
}

const createEmty = () => {
    return {
        isLoading: false,
    }
}

export const uiReducer = (state = createEmty(), action: IUIAction) => {
    switch (action.type) {
        case GLOBAL_LOADING:
            return { ...state, isLoading: action.isLoading }
        default:
            return state
    }
}