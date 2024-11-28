const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        id : {
            type: Number,
            required: [true, 'id is required'],
        },
        name: {
            type: String,
            required: [true, 'name is required'],
        },
        username: {
            type: String,
            required: [true, 'username is required'],
        },
        email: {
            type: String,
            required: [true, 'email is required'],
        },
        address: {
            type: Object,
        },
        phone: {
            type: String,
            required: [true, 'phone is required'],
        },
        website: {
            type: String,
        },
        company: {
            type: Object,
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', UserSchema)
module.exports = User
