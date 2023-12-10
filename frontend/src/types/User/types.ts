export interface User {
  userId: number;
  name: string;
}

export interface UserState {
  users: User[],
  loading: boolean,
  error: string | null
  isAuthenticated: boolean
  currentUser: User | null
}

export interface ApiUserResponse {
  data: User[];
  message: string
  success: boolean
}

export interface Login {
  userName: string
  password: string
}
