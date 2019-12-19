var mongoose = require('mongoose');
var helper = require('helper');

var schema = new mongoose.Schema({
    id: {
        type: Number,
        default: helper.generateRandomID(),
        required: true
    },
    username: {
        type: String,
        default: '',
        required: true
    },
    name: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: '',
        required: true
    },
    dob: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Number,
        default: 0
    }
});

var User = mongoose.model('User', schema);

module.exports = User;