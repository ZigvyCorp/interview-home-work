import axiosClient from "./axiosClient";

const getUsers =async () =>{
    const url = `/users`;
    const response = await axiosClient.get(url);
    return response.data;
}

export {
    getUsers
}