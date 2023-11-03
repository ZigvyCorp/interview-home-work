import Joi from 'joi';

const createBlog = {
  body: Joi.object().keys({
    author: Joi.string().required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
    postedAt: Joi.date().optional(),
  }),
};

export const blogValidation = { createBlog };
