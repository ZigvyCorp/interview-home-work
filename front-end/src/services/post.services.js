import { api } from "../utils/axios"

export const getAllPosts = async () => {
  const postsRes = await api.get("/posts")
  const data = postsRes.data.data
  return data
}

export const getPostById = async (id) => {
  const postsRes = await api.get("/posts/" + id)
  const data = postsRes.data.data
  return data
}
