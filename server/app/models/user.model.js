const mongoose =require("mongoose")
const userSchema = new mongoose.Schema({
    _id:  mongoose.Types.ObjectId,
    name:{
        type:String,
        required:true,
        unique:true
    },
    post:[{type:mongoose.Schema.Types.ObjectId,
        ref:"Post"}]
})
module.exports = mongoose.model("User",userSchema)