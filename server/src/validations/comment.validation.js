
const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getCommentsOfPost = {
    params: Joi.object().keys({
        id: Joi.string().required().custom(objectId)
    }),
    query: Joi.object().keys({
        skip: Joi.number().default(0),
        limit: Joi.number().default(10)
    })
}

module.exports = {
    getCommentsOfPost
}