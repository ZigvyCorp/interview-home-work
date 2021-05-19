import axios from 'axios'
import {POST_LIST_FAIL, POST_LIST_REQUEST, POST_LIST_SUCCESS} from '../constants/type'
var url= "https://jsonplaceholder.typicode.com"
const listPosts = (page) => async (dispatch) =>{
    try{
        dispatch({type: POST_LIST_REQUEST});
         const {data} = await axios.get(`${url}/posts?_page=${page}&_limit=10`);
        dispatch({type: POST_LIST_SUCCESS, payload: data});
        
    }  
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: POST_LIST_FAIL, payload: message});
    }

}
export { listPosts };