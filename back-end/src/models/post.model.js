const {Schema} = require('mongoose')
const { MODEL_USER } = require('./user.model')
const connectionDB = require('../databases/init.mongodb')

const MODEL_POST = "posts"

const postSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: MODEL_USER, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    tags: {type: [String], required: true},
}, {timestamps: true, collection: MODEL_POST})

const PostModel = connectionDB.model(MODEL_POST, postSchema)

module.exports = {
    PostModel,
    MODEL_POST
}