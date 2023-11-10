import axios from "axios";

export const http = axios.create({
    baseURL: 'https://api-project-server.vercel.app'
});