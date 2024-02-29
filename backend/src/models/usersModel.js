const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    dob: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
    }
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;