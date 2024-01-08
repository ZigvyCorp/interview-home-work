import { GET_DB } from '~/config/mongodb'
import Joi from 'joi'

const USER_COLLECTION_NAME = 'users'
const USER_COLLECTION_SCHEMA = Joi.object({
  username: Joi.string().required().max(255).min(1),
  password: Joi.string().required().max(255).min(1),
  created_at: Joi.number().required().default(Date.now()),
  name: Joi.string().allow(null).default(''),
  dob: Joi.string().allow(null).default('')
})


export const userModel = {
  USER_COLLECTION_NAME
}