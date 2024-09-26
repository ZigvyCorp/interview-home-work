// Import Thư viện Express
const mongoose = require("mongoose")
// Khai báo Schema
const Schema = mongoose.Schema
// Khởi tạo schema
const commentSchema = new Schema({
    _id:  mongoose.Types.ObjectId,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    content:{
        type:String,
        required:true
    },
    post:{
                type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }
})
// Biên dịch Schema
module.exports = mongoose.model("Comment",commentSchema)