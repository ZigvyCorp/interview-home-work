const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    username: { type: String, unique: true, required: true },
    hashpassword: { type: String, required: true },
    name: { type: String, required: true },
    dob: {type: String},
    created_at: { type: Number, default:(new Date()).getTime() }
});


schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);