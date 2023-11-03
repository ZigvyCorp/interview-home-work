const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   
    userId: {type: Number, unique: true},
    name: {type: String, required: true},
    username:{type: String, required: true, unique: true},
    email:{type: String, required: true},
    address:{type: String, required: true},
    postId: [{
        type: mongoose.Schema.Types.Number,
        ref:"Post",
    }],
    commentId: [{
        type: mongoose.Schema.Types.Number,
        ref:"Comment",
    }],
}
);
const User = mongoose.model("User", userSchema);
module.exports = User;  