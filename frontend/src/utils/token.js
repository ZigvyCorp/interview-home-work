export const getToken = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        return null;
    }
    return token;
};