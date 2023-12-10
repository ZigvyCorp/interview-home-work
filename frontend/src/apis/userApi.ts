import { Login, User } from "../types/User/types"
import axiosService from "./axiosService"

const userApi = {
    fetchUsers: () => axiosService.get<ApiBaseResponse<User>>('/user/get-suggest-user'),
    login: (body: Login) => axiosService.post<ApiBaseResponse<string>>('/user/login', body),
    getCurrentUser: () => axiosService.get<ApiBaseResponse<User>>('/user/get-current-user')
}

export default userApi