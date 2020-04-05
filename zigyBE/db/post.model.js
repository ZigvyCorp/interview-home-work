const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    owner: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: {type: [String], required: true},
    created_at: { type: Number, default:(new Date()).getTime()/1000 }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Post', schema);