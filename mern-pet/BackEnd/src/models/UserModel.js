const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        username: { type: String, require: true, unique: true},
        password: { type: String, require: true},
        name: { type: String, require: false},
        dob: { type: String, require: false},
        access_token: { type: String, require: true},
        refresh_token: { type: String, require: true},
    },
    {
        timestamps: true
    }
);
const User = mongoose.model('User', userSchema);
module.exports = User;