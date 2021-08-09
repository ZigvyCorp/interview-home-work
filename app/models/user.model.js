const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    
    username: {type: String, require: true},

    password: {type: String, require: true},

    name: { type: String, require: true },

    dob: { type: Date, require: true, default: new Date },

    created_at: { type: Date, require: true, default: new Date }
    
})

module.exports = mongoose.model('users', user);