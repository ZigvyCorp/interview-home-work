import axios from "axios";

export const requestGetUser = () => {
    return axios.get(`${import.meta.env.VITE_API_KEY}/user`);
};
