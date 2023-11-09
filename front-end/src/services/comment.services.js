import { api } from "../utils/axios"

export const getCommentsByIdPost = async (id) => {
  const res = await api.get(`/comments/${id}`)
  return res.data.data
}
