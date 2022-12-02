import axiosClient from './axiosClient';

const getUsers = async () => {
    const url = `api/v1/users`;
    const response = await axiosClient.get(url);
    return response.data;
};

export { getUsers };
