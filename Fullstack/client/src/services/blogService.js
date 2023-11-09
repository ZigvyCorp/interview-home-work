import { https } from "./axios"

export const blogService = {
    handlePostNews: (data) => {
        const url = `/blog`
        return https.post(url, data)

    },
    handleGetNews: (params) => {
        const url = `/blog`
        return https.get(url, { params })

    },
    handleGetCurrentNews: (params) => {
        const url = `/blog/current-blog/${params}`
        return https.get(url)

    },
    handleDeleteNews: (params) => {
        const url = `/blog/${params}`
        return https.delete(url)

    },
    handleUpdateNews: (params, data) => {
        const url = `/blog/${params}`
        return https.put(url, data)

    },
    handleComment: (params, data) => {
        console.log('params: ', params);
        const url = `/blog/comment/${params}`
        return https.put(url, data)

    },
    handleLikeNews: (params) => {
        const url = `/blog/like-blog/${params}`
        return https.put(url)

    },


}