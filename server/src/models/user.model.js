const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    dob: String,
    created_at: Date
})

module.exports = mongoose.model('User', schema)