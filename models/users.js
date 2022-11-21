const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    dob:{
        type: String,
        require: true
    }

}, { timestamps: true })
const user = mongoose.model("user", userSchema, "user")

module.exports = user
