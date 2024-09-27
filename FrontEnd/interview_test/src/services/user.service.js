

import { axiosInstance } from ".";


export const getUsers = () => {
    return axiosInstance.get('/api/user/get-users-data')
}