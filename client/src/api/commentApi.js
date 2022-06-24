import axiosClient from "./axiosClient";

const getCommentsOfPost = async(id) => {
    const url = `/posts/${id}/comments`;
    const response = await axiosClient.get(url);
    return response.data;
};


export { 
    getCommentsOfPost
}