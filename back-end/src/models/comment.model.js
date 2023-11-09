const {Schema} = require('mongoose')
const { MODEL_USER } = require('./user.model')
const { MODEL_POST } = require('./post.model')
const connectionDB = require('../databases/init.mongodb')

const MODEL_COMMENT = "comments"

const commentSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: MODEL_USER, required: true},
    post: {type: Schema.Types.ObjectId, ref: MODEL_POST, required: true},
    content: {type: String, required: true},
}, {timestamps: true, collection: MODEL_COMMENT})

const CommentModel = connectionDB.model(MODEL_COMMENT, commentSchema)

module.exports = {
    CommentModel,
    MODEL_COMMENT
}