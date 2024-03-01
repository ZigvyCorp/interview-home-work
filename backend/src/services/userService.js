import axiosClient from '../config/axiogConfig'

const getAllUsers = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosClient.get(`/users`)
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Get users failed',
            data: response.data,
        })
        return response.data
    } catch (error) {
        reject(error)
    }
})

const getUserDetail = ({ params }) => new Promise(async (resolve, reject) => {
    const { id } = params
    try {
        const response = await axiosClient.get(`/users/${id}`)
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Get users failed',
            data: response.data,
        })
    } catch (error) {
        reject(error)
    }
})

module.exports = {
    getAllUsers,
    getUserDetail
}