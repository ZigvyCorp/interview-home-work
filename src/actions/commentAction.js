import { GET_COMMENTS } from "./const"
import axios from 'axios'

export function getComment () {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res =>{
            dispatch({
                type: GET_COMMENTS,
                payload: res.data
            })
        })
    }
}
