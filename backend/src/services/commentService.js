import axiosClient from '../config/axiogConfig'
import { generateRandomDate } from '../utils/generateRandomDate'

const getComments = () => new Promise(async (resolve, reject) => {
    try {
        const comments = await axiosClient.get(`/comments`)
        const response = comments.data.map(comment => {
            return {
                ...comment,
                createAt: generateRandomDate()
            }
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Get posts unsuccessfully',
            data: response
        })
    } catch (error) {
        reject(error)
    }
})

module.exports = {
    getComments,
}