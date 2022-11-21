const Joi = require("joi");

const createPost = {
  body: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    tag: Joi.array().items(Joi.string()).required(),
  }),
};

const updatePost = {
  body: Joi.object({
    postId: Joi.string().required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
    tag: Joi.array().items(Joi.string()).required(),
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

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPostById,
};
