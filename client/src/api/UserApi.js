import axiosClient from './axiosClient';

const userApi = {
    getAllUsers: (data,params)=>{
        const url = '/users';
        return axiosClient.get(url,data,params);
    }
}

export default userApi;