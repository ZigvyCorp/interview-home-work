import axios from 'axios';


const URL = 'http://localhost:5000';


export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payLoad) => axios.post(`${URL}/posts`, payLoad);

export const loginCall = async (userCredential) => {
   
    try {
      console.log("ok");
      const res = await axios.post(`${URL}/auth/login`, userCredential);
      return {type: "LOGIN_SUCCESS"} ;
    } catch (err) {
      console.log(err);
      return {type: "LOGIN_FAILURE"} ;
  
    }
  };
  