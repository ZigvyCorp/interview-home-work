const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Schema.ObjectId,
    name: {type:String},
    username: {type:String},
    email: {type:String},
    address: {type:Object},
    phone: {type: String},
    website: {type: String},
    company: {type: Object}
});

module.exports = mongoose.model('user', userSchema);