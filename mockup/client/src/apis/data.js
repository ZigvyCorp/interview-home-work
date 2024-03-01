import { API_URL } from "@/constant"
import axios from "axios"

export const apiGetAllPost = async (page, pageSize) => {

    const response = await axios.get(`${API_URL}/post?page=${page}&pageSize=${pageSize}`)

    return response
}

export const apiPostComment = async (id) => {

    const response = await axios.get(`${API_URL}/comment/post/${id}`)

    return response
}

export const apiSearchPost = async (keyword) => {

    const response = await axios.post(`${API_URL}/post/search`, {
        keyword
    })

    return response
}

export const apiGetPostById = async (id) => {

    const response = await axios.get(`${API_URL}/post/${id}`)

    return response
}
