import axios from "axios";

export const requestGetComment = () => {
    return axios.get(`${import.meta.env.VITE_API_KEY}/comment`);
};
