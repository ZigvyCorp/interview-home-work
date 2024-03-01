import axiosClient from "../axiogConfig";

export const apiGetComments = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosClient.get(`/comments`)
        resolve(response)
    } catch (error) {
        reject(error)
    }
});
