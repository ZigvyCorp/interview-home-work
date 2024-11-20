import { ADD_LOADING } from "../type/loadingType";

const initialState = {
    isLoading: false,
    keys: []
}
const loadingReducer = (state = initialState, action)=>{
    const {type, payload} = action;
    switch (type) {
        case ADD_LOADING:
            return {
                ...state,
                isLoading:true,  
            };
    
        default:
            return state;
    }
}
export default loadingReducer