const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    id: Number,
    username: String,
    password: String,
    name: String,
    dob: String,
    createAt: { type: Date, default: Date.now},
})

module.exports = mongoose.model('users', UserSchema)