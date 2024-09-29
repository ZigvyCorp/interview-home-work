import axios from "axios";

export const getUsersById = async (id: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
};
