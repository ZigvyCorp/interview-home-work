import axios from 'axios'
import { COMMENT_LIST_FAIL, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS } from '../constants/type'
var url= "https://jsonplaceholder.typicode.com"
const listComments = () => async (dispatch) =>{
    try{
        dispatch({type: COMMENT_LIST_REQUEST});
         const {data} = await axios.get(`${url}/comments`);
        dispatch({type: COMMENT_LIST_SUCCESS, payload: data});
        
    }  
    catch(error){
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({type: COMMENT_LIST_FAIL, payload: message});
    }

}
export { listComments };