import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const getPost = async (req, res, next) => {
  const getPostCondition = Joi.object({
    page: Joi.number().min(1).optional(),
    perPage: Joi.number().min(1).optional(),
    title: Joi.string().optional()
  })
  try {
    await getPostCondition.validateAsync(req.query, { abortEarly: false })
    next()
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
  }
}

const getCommentByPostID = async (req, res, next) => {
  const getCommentByPostIDCondition = Joi.object({
    page: Joi.number().min(1).optional(),
    perPage: Joi.number().min(1).optional()
  })
  try {
    await getCommentByPostIDCondition.validateAsync(req.query, { abortEarly: false })
    next()
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
  }
}

export const postValidation = {
  getPost,
  getCommentByPostID
}