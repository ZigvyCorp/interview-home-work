const initalState = {
    posts: []
}

export default function(state = initalState, action){
    switch(action.type){
        case 'UPDATE_POST':
            return {
                ...state,
                posts: action.payload
            }
        default: 
            return state;  
    }
}