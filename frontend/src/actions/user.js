import axios from 'axios'
import {USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS} from '../constants/type'
var url = "http://localhost:8080"

const listUsers = () => async (dispatch) =>{
    try{
        dispatch({type: USER_LIST_REQUEST});
         const {data} = await axios.get(`${url}/users`);
        dispatch({type: USER_LIST_SUCCESS, payload: data});     
    }  
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: USER_LIST_FAIL, payload: message});
    }
}
export { listUsers };