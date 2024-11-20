export interface User {
  _id: string
  username: string
  password: string
  name: string
  dob: string
  createdAt: string
  updatedAt: string
}

export interface UserState {
  user: User | null
  isLoading: boolean
  error: string | null
}

export interface GetUserResponse {
  success: boolean
  user: User
}
