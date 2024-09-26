import { FETCH_POST_ERROR, FETCH_POST_PENDING, FETCH_POST_SUCCESS } from "../constants/constant"

export const fetchPost =()=>{
        return async (dispatch) => {
          try {
            var requestOptions = {
              method: "GET",
              redirect: "follow",
            }
            await dispatch({
              type: FETCH_POST_PENDING,
            })
            const response = await fetch("http://localhost:8000/api/v2/posts/", requestOptions)
            const data = await response.json()
            return dispatch({
              type: FETCH_POST_SUCCESS,
              payload: data.data,
            })
          } catch (error) {
            return dispatch({
              type: FETCH_POST_ERROR,
              error: error,
            })
          }
        }
}