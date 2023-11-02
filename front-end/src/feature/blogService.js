import axios from "axios";

const getBlogs = async () => {
    const response = await axios.get(`http://localhost:3001/api/posts`);
    if (response.data) {
        return response.data;
    }
}

const getBlog = async (id) => {
    const response = await axios.get(`http://localhost:3001/api/posts/${id}`);
    if (response.data) {
        return response.data;
    }
}

export const blogService = {
    getBlogs,
    getBlog
}