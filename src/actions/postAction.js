import { GET_POSTS } from "./const"
import axios from 'axios'

export function getPosts () {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        })
    }
}
