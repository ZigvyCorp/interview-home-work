import axios from "axios";

export const http = axios.create({
    baseURL: 'https://api-server-kbi8.onrender.com'
});