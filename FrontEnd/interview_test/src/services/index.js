
import axios from 'axios'

import { API_URL } from '../config/baseURI'

export const axiosInstance = axios.create({
    baseURL : API_URL
})