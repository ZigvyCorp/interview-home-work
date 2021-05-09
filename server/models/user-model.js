const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        id: {type: Number, required: true},
        username: {type: String, required: true},
        password: {type: String, required: true},
        name: {type: String, required: true},
        dob: {type: Date, required: true},
        created_at: {type: Number, required: true }
    }
)

module.exports = mongoose.model('User', User);