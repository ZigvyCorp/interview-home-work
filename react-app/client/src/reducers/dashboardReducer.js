export const initialState = {
    dataFromBackend : {},
    getDataFromBackend : {usersList:[]}
}

export const dashboardReducer = (state = initialState, action) => {
    switch(action.type){
        case 'DATA_FROM_BACKEND' :
            return {
                ...state,
                dataFromBackend : action.dataFromBackend
            }
        case 'GET_DATA' :
            return {
                ...state,
                getDataFromBackend : action.getDataFromBackend
            }
        default:
        return state
    }
}