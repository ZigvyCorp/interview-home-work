/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { toast } from 'react-toastify'

import { ErrorResponse } from 'src/types/utils.type'
import { URL_LOGIN, URL_LOGOUT, URL_REFRESH_TOKEN } from '~/api/users.api'
import { HttpStatusCode } from '~/constants/enum'
import { AuthResponse, RefreshTokenResponse, User } from '~/types/users.type'
import {
  clearAuthFromLS,
  getAccessTokenFromLS,
  getRefreshTokenFromLS,
  setAccessTokenToLS,
  setProfileToLS,
  setRefreshTokenToLS
} from './storage'
import { isExpiredTokenError, isUnauthorizedError } from './utils'

class Http {
  instance: AxiosInstance
  private accessToken: string
  private refreshToken: string
  private refreshTokenRequest: Promise<string> | null
  private profile: User | null

  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.refreshToken = getRefreshTokenFromLS()
    this.refreshTokenRequest = null
    this.profile = null
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // Thêm một interceptor trước khi request được gửi đi
    this.instance.interceptors.request.use(
      (config) => {
        // Thêm access token vào header nếu có
        if (this.accessToken && config.headers) {
          config.headers.Authorization = `Bearer ${this.accessToken}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // Thêm một interceptor trước khi response được trả về
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        // Lưu thông tin user vào localStorage khi đăng nhập, đăng ký hoặc reset password
        if (url === URL_LOGIN) {
          this.accessToken = (response.data as AuthResponse).data.access_token
          this.refreshToken = (response.data as AuthResponse).data.refresh_token
          this.profile = (response.data as AuthResponse).data.user
          setAccessTokenToLS(this.accessToken)
          setRefreshTokenToLS(this.refreshToken)
          setProfileToLS(this.profile)
        } else if (url === URL_LOGOUT) {
          this.accessToken = ''
          this.refreshToken = ''
          clearAuthFromLS()
        }
        return response
      },

      async (error: AxiosError) => {
        // Thông báo lỗi nếu không phải lỗi 422 (Lỗi validate) hoặc 401 (Sai, thiếu hoặc hết hạn access token)
        if (
          ![HttpStatusCode.UnprocessableEntity, HttpStatusCode.Unauthorized].includes(error.response?.status as number)
        ) {
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          toast.error(message)
        }
        // Xử lý lỗi 401 (Sai, thiếu hoặc hết hạn access token)
        if (isUnauthorizedError<ErrorResponse<{ name: string; message: string }>>(error)) {
          const config = error.response?.config || ({ headers: {} } as InternalAxiosRequestConfig)
          const { url } = config
          // Xử lý khi hết hạn token
          if (isExpiredTokenError(error) && url !== URL_REFRESH_TOKEN) {
            this.refreshTokenRequest = this.refreshTokenRequest
              ? this.refreshTokenRequest
              : this.handleRefreshToken().finally(() => {
                  setTimeout(() => {
                    this.refreshTokenRequest = null
                  }, 10000)
                })
            return this.refreshTokenRequest.then((access_token) => {
              config.headers.Authorization = `Bearer ${access_token}`
              // Tiếp tục request cũ nếu bị lỗi
              return this.instance({
                ...config,
                headers: {
                  ...config.headers,
                  Authorization: `Bearer ${access_token}`
                }
              })
            })
          }
          clearAuthFromLS()
          this.accessToken = ''
          this.refreshToken = ''
          this.profile = null
          toast.error(error.response?.data.data?.message || error.response?.data.message)
        }
        return Promise.reject(error)
      }
    )
  }

  // Xử lý refresh token
  private handleRefreshToken = async () => {
    return this.instance
      .post<RefreshTokenResponse>(URL_REFRESH_TOKEN, { refresh_token: this.refreshToken })
      .then((res) => {
        const { access_token, refresh_token } = res.data.data
        setAccessTokenToLS(access_token)
        setRefreshTokenToLS(refresh_token)
        this.accessToken = access_token
        this.refreshToken = refresh_token
        return access_token
      })
      .catch((error) => {
        clearAuthFromLS()
        this.accessToken = ''
        this.refreshToken = ''
        throw error
      })
  }
}

const http = new Http().instance
export default http
