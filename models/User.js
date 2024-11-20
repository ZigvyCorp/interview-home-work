const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    id: {type : Number, unique: true},
    username: {type : String, unique : true},
    password: {type : String},
    name: {type: String},
    dob: {type: String},
    create_at: {type : Number}
});


module.exports = mongoose.model('User', User);