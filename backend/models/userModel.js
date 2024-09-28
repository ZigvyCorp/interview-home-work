// E:\ZigvyInterviewBlog\backend\models\userModel.js
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: false
        },
        dob: {
            type: String,
            required: false
        },
        created_at: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: false
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
