import axios from 'axios';
import { BACKEND_URL } from '../constants/config';
const axiosClient = axios.create({
    baseURL: BACKEND_URL,
})
  
  export default axiosClient;