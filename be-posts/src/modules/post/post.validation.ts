import Joi from 'joi';
import { NewCreatePost } from './post.interfaces';
import { objectId } from '../validate';

const createPostBody: Record<keyof NewCreatePost, any> = {
  author: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
};

export const createPost = {
  body: Joi.object().keys(createPostBody),
};

export const getPosts = {
  query: Joi.object().keys({
    title: Joi.string().allow(null, ''),
    sortBy: Joi.string(),
    projectBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getPost = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};
