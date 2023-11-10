import { UserGender, UserRole, UserStatus } from '~/constants/enum'
import { SuccessResponse } from './utils.type'

// Type: User
export interface User {
  _id: string
  email: string
  firstName: string
  lastName: string
  gender: UserGender
  status: UserStatus
  role: UserRole
  date_of_birth: string
  created_at: string
  updated_at: string
}

// Request: Đăng nhập
export interface LoginReqBody {
  email: string
  password: string
}

// Request: Đăng ký
export interface RegisterReqBody {
  email: string
  password: string
  confirm_password: string
}

// Response: Đăng nhập thành công
export type AuthResponse = SuccessResponse<{
  access_token: string
  refresh_token: string
  user: User
}>

// Response: Refresh token
export type RefreshTokenResponse = SuccessResponse<{
  access_token: string
  refresh_token: string
}>
