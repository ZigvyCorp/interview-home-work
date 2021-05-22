const getCommentParamsSchema=require('./get-comment.params.json')
const getCommentQuerySchema=require('./get-comment.query.json')
const createCommentBodySchema=require('./create-comment.body.json')
const updateCommentBodySchema=require('./update-comment.body.json')

module.exports ={
    getCommentQuerySchema,
    getCommentParamsSchema,
    createCommentBodySchema,
    updateCommentBodySchema
}