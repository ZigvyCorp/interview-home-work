
import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    title: {type:String, required: true},
    content: {type:String, required: true},
    created_at: {type:Number, required: true},
    tags:[
        {
            type: String
        }
    ]
},{timestamps: true})

const Post = mongoose.model('posts',PostSchema)

export default Post