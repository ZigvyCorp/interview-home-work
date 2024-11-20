import axios from "axios"


const postReducer = (state=[], action) =>{
    switch (action.type) {
        case "add":
            return [...action.posts]
        default:
            return state
    }
}
export default postReducer