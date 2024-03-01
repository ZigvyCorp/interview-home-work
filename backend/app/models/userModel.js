const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },
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
        default: ''
    },
    dob: {
        type: String,
        default: ''
    },
    create_at: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('users', userModel);
