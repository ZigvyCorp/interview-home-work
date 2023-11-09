import mongoose from 'mongoose'


const commentSchema = mongoose.Schema(
    {
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "users",
            required:true
        },
        post: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"posts",
            required: true,
        },
        content: { type:String, required: true},
        created_at: {type:String, required: true}
    },
    {
        timestamps:true
    }
)

const Comment = mongoose.model('Comment', commentSchema);

export default Comment