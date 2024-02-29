import Endpoint from "../consts/endpoints";
import HttpUtility from "./HttpUltilities";

const baseAPI=process.env.REACT_APP_API_ENDPOINT

export const getCommentByPostId =(post_id:number)=>{
    console.log(baseAPI+Endpoint.COMMENTS_BY_POST_ID+post_id)
    return HttpUtility.get(baseAPI+Endpoint.COMMENTS_BY_POST_ID+post_id)
}