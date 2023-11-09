const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    dob: {
        type: String,
        require: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);