import { GET_USERS } from "./const"
import axios from 'axios'

export function getUser () {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        })
    }
}
