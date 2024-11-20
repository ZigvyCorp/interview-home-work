import { postModel } from '~/models/postModel'
import { commentModel } from '~/models/commentModel'

const getPost = async (query) => {
  return await postModel.getPostPagination(query)
}

const getCommentByPostID = async (fillter) => {
  return await commentModel.getCommentPaginationByPostID(fillter)
}

const getPostDetail = async (id) => {
  return await postModel.getPostDetail(id)
}

export const postService = {
  getPost,
  getCommentByPostID,
  getPostDetail
}