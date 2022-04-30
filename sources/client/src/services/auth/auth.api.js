import { API } from "../axios.config";

export const login = async (data) => await API.post("/auth/login", data);
export const verifyJwt = async (data) => await API.post("/auth/verify", data);
export const register = async (data) => await API.post("/auth/register", data);
