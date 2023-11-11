import axiosInstance from "./axiosInstance";

const authService = {
    register: (formData) => {
        return axiosInstance.post('/auth/register', formData);
    },
    login: (formData) => {
        return axiosInstance.post('/auth/login', formData);
    },
    getMe: () => {
        return axiosInstance.get('/auth/me');
    }
};

export default authService;