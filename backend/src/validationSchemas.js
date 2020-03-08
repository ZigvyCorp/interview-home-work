import Joi from '@hapi/joi'

import { Genders } from './utils/constants'

export default {
  ['POST /api/users/signin']: Joi.object({
    body: {
      username: Joi.string()
        .min(8)
        .required(),
      password: Joi.string()
        .min(8)
        .max(30)
        .required(),
    },
  }),
  ['POST /api/users/signup']: Joi.object({
    body: {
      username: Joi.string()
        .min(8)
        .required(),
      password: Joi.string()
        .min(8)
        .max(30)
        .required(),
      name: Joi.string(),
      dob: Joi.date(),
      gender: Joi.string()
        .valid(...Object.values(Genders))
        .default(Genders.Male),
      picture: Joi.string()
        .uri()
        .default(''),
    },
  }).with('username', 'password'),
  ['GET /api/posts']: Joi.object({
    query: {
      page: Joi.number()
        .integer()
        .min(0)
        .default(0),
      amountPerPage: Joi.number()
        .integer()
        .min(1)
        .default(10),
      search: Joi.string().empty(''),
    },
  }),
  ['POST /api/comments']: Joi.object({
    body: {
      owner: Joi.string().required(),
      post: Joi.string().required(),
      content: Joi.string().required(),
    },
  }),
}
