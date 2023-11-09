import { api } from "../utils/axios"

export const getAllUsers = async () => {
  const res = await api.get("/users")
  const data = res.data.data
  return data
}

export const getUserById = async (id) => {
  const res = await api.get(`/users/${id}`)
  const data = res.data.data
  return data
}
