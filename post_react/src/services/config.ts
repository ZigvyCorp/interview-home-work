import axios from 'axios';

export const BASE_URL = "http://localhost:8080";

// axios instance
export const https = axios.create({
    baseURL: BASE_URL,
});