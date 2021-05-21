const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    username: String,
    password: String,
	name: String,
    dob: String,
    created_at: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('user', user);
