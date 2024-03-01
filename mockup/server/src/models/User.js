const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: { type: String },
        name: { type: String },
        password: { type: String },
        dob: { type: String },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', User)
