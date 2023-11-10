import { apiInstance } from '../constant/apiInstance.js'


export const getAllPost = async () => {
    try {
        const data = await apiInstance.get(`posts/all`)
        return data.data

    } catch (error) {
        console.error(error)
    }
}

export const searchPosts = async (query) => {
    try {
        const data = await apiInstance.get(`posts/search?query=${query}`)
        return data.data
    } catch (err) {
        console.log(err)
    }
}



