import { TApiResponse, axiosInstance } from "../axios"
import { TUser } from "../types"

const getUser = async (
    id: string
): Promise<TApiResponse<TUser>> => {
    const { data } = await axiosInstance.get(`/users/${id}`)
    return data
}

const usersService = {
    getUser
}

export default usersService