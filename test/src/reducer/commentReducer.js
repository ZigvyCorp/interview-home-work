import axios from "axios"


const commentReducer = (state=[], action) =>{
    switch (action.type) {
        case "detailComment":
            return [...action.comments]
        default:
            return state
    }
}
export default commentReducer