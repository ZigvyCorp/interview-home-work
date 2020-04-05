const initalState = {
    profile: {}
}

export default function(state = initalState, action){
    switch(action.type){
        case 'UPDATE_PROFILE':
            return {
                ...state,
                profile: action.payload
            }
        default: 
            return state;  
    }
}