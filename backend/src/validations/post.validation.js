const Joi = require("joi");

const createPost = {
  body: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
  }),
};

const updatePost = {
  body: Joi.object({
    postId: Joi.string().required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
  }),
};

const deletePost = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

const getPostById = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

const getPost = {
  query: Joi.object({
    limit: Joi.number().required().min(1),
    page: Joi.number().required().min(0),
  }),
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPostById,
  getPost,
};
