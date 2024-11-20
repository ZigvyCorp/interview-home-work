const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    "id": Number,
    "owner": Number,
    "post": Number,
    "content": String,
    "created_at": {
        "$numberLong": String
    }
})
mongoose.model("comment",commentSchema)