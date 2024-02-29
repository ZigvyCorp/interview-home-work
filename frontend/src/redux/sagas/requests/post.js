import axios from "axios";

export const requestGetPost = () => {
    return axios.get(`${import.meta.env.VITE_API_KEY}/post`);
};
