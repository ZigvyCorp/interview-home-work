import { AuthResponse, LoginReqBody } from '~/types/users.type'
import { OnlyMessageResponse } from '~/types/utils.type'
import http from '~/utils/http'
import { getRefreshTokenFromLS } from '~/utils/storage'

export const URL_LOGIN = '/users/login'
export const URL_LOGOUT = '/users/logout'
export const URL_REFRESH_TOKEN = '/users/refresh-token'

const usersApi = {
  // Đăng nhập
  login(body: LoginReqBody) {
    return http.post<AuthResponse>(URL_LOGIN, body)
  },

  // Đăng xuất
  logout() {
    const refresh_token = getRefreshTokenFromLS()
    return http.post<OnlyMessageResponse>(URL_LOGOUT, { refresh_token })
  }
}

export default usersApi
