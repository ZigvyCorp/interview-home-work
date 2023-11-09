const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getPosts = {
    query: Joi.object().keys({
        skip: Joi.number().default(0),
        limit: Joi.number().default(10),
        search: Joi.string().allow('')
    })
}

const getPost = {
    params: Joi.object().keys({
        id: Joi.string().required().custom(objectId)
    })
}

module.exports = {
    getPosts,
    getPost
}