const mongoose =require("mongoose")
const postSchema = new mongoose.Schema({
    _id:  mongoose.Types.ObjectId,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        unique:true,
        required:true
    },
    content:{
        type:String,
    },
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
},
)
module.exports = mongoose.model("Post",postSchema)