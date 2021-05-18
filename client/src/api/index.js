import axios from 'axios';


const URL = 'http://localhost:5000';


export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payLoad) => axios.post(`${URL}/posts`, payLoad);

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
   const res = await axios.post(`${URL}/auth/login`, userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const logoutCall = async (dispatch) => {
 
  try {
    console.log("ok");
   const res = await axios.get(`${URL}/auth/logout`);

   dispatch({ type: "LOGOUT_SUCCESS", payload: null});
  } catch (err) {
    
  }
};

export const comment = async (params, postId, comment) => {
  try {
    
    let response = await fetch(`${URL}/posts/comment`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
 
      },
      body: JSON.stringify({userId:params.userId, postId: postId, comment: comment})
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
};