import axiosClient from '../config/axiogConfig'
import { generateRandomDate } from '../utils/generateRandomDate'


const getPosts = ({ query }) => new Promise(async (resolve, reject) => {
    const { page, limit, q } = query
    try {
        let posts = await axiosClient.get('/posts')
        if (q) {
            posts.data = posts.data.filter(post => post.title.toLowerCase().includes(q.toLowerCase()))
        }
        posts = posts.data.map(post => {
            return {
                ...post,
                createdAt: generateRandomDate(),
            }
        })

        const response = posts.slice((page - 1) * limit, page * limit)
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Get posts failed',
            data: response,
            totalPages: Math.ceil(posts.length / limit)
        })
    } catch (error) {
        reject(error)
    }
})

const getPostDetail = ({ params }) => new Promise(async (resolve, reject) => {
    const { id } = params
    try {
        const post = await axiosClient.get(`/posts/${id}`)
        const response = {
            ...post.data,
            createAt: generateRandomDate()
        }
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Get post detail failed',
            data: response,
        })
    } catch (error) {
        reject(error)
    }
})

const getPostComments = ({ params }) => new Promise(async (resolve, reject) => {
    const { id } = params
    try {
        const comments = await axiosClient.get(`/posts/${id}/comments`)
        const response = comments.data.map(comment => {
            return {
                ...comment,
                createAt: generateRandomDate()
            }

        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Get post detail failed',
            data: response,
        })
    } catch (error) {
        reject(error)
    }
})

module.exports = {
    getPosts,
    getPostDetail,
    getPostComments
}