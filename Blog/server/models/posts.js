    const mongoose = require('mongoose')
    require('./users')
    const postSchema = new mongoose.Schema({
        "id": Number,
        "owner": {
            type: mongoose.Schema.Types.Number,
            ref: "user"
        },
        "title": String,
        "content": String,
        "created_at": {
            "$numberLong": String
        },
        "tags": [],
    })
    mongoose.model("post",postSchema)