const Joi = require('joi');

const userValidate = data =>{
    const userSchema = Joi.object({
        id:Joi.number(),
        username: Joi.string().lowercase().required(),
        password: Joi.string().min(4).max(20).required(),
        name:Joi.string(),
        dob:Joi.date(),
        created_at:Joi.date(),
    })
    return userSchema.validate(data)
}
const postValidate = data =>{
    const postSchema = Joi.object({
        id:Joi.number(),
        owner: Joi.number().required(),
        title: Joi.string().required(),
        content:Joi.string().required(),
        tags:Joi.array(),
        created_at:Joi.date(),
    })
    return postSchema.validate(data)
}

const commentValidate = data =>{
    const commentSchema = Joi.object({
        id:Joi.number(),
        owner: Joi.number().required(),
        post: Joi.number().required(),
        content:Joi.string().required(),
        created_at:Joi.date(),
    })
    return commentSchema.validate(data)
}
module.exports = {
    userValidate,
    postValidate,
    commentValidate
}