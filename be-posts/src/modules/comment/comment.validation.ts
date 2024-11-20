import Joi from 'joi';
import { NewCreateComment } from './comment.interfaces';
import { objectId } from '../validate';

const createCommentBody: Record<keyof NewCreateComment, any> = {
  postId: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  body: Joi.string().required(),
};

export const createComment = {
  body: Joi.object().keys(createCommentBody),
};

export const getComments = {
  query: Joi.object().keys({
    postId: Joi.string(),
    sortBy: Joi.string(),
    projectBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getComment = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};
