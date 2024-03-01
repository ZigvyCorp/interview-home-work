import axiosClient from "../axiogConfig";

export const apiGetUsers = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosClient.get(`/users`)
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetUserById = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosClient.get(`/users/${id}`)
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
