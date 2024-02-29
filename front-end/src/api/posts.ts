import Endpoint from "../consts/endpoints";
import HttpUtility from "./HttpUltilities";

const baseAPI=process.env.REACT_APP_API_ENDPOINT

export const getAllPost =()=>{
    return HttpUtility.get(baseAPI+Endpoint.POSTS)
}