import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
import { postService } from '~/services/postService'
import { ObjectId } from 'mongodb'

const getPost = async (req, res, next) => {
  try {
    const result = await postService.getPost(req.query)
    res.status(StatusCodes.OK).json({
      statusCode: StatusCodes.OK,
      data: result.posts || [],
      total: result.totalPosts || 0
    })
  } catch (error) {
    next(error)
  }
}

const getCommentByPostID = async (req, res, next) => {
  try {
    if (!req.params.id || ObjectId.isValid(req.params.id) === false) throw new ApiError(StatusCodes.BAD_REQUEST, 'Invalid post id')
    const result = await postService.getCommentByPostID({postID : req.params.id, query: req.query})
    res.status(StatusCodes.OK).json({
      statusCode: StatusCodes.OK,
      data: result.comments || [],
      total: result.totalComment || 0
    })
  } catch (error) {
    next(error)
  }
}

const getPostDetail = async (req, res, next) => {
  try {
    if (!req.params.id || ObjectId.isValid(req.params.id) === false) throw new ApiError(StatusCodes.BAD_REQUEST, 'Invalid post id')
    const result = await postService.getPostDetail(req.params.id)
    res.status(StatusCodes.OK).json({
      statusCode: StatusCodes.OK,
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const postController = {
  getPost,
  getCommentByPostID,
  getPostDetail
}