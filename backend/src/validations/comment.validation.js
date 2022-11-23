const Joi = require("joi");

const getComments = {
  query: Joi.object({
    postId: Joi.string().required(),
  }),
};

const createComment = {
  body: Joi.object({
    post: Joi.string().required(),
    content: Joi.string().required(),
  }),
};

module.exports = {
  getComments,
  createComment,
};
