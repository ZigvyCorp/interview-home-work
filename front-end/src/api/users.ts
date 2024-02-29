import Endpoint from "../consts/endpoints";
import HttpUtility from "./HttpUltilities";

const baseAPI=process.env.REACT_APP_API_ENDPOINT

export const getAllUsers =()=>{
    return HttpUtility.get(baseAPI+Endpoint.USERS)
}