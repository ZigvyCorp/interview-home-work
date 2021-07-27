const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema({
    
    title: {type: String, require: true},

    content: {type: String, require: true},

    tags: [{ type: String, require: true }],

    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'users', require: true },

    created_at: { type: Date, require: true, default: new Date }
    
})
post.index({ title: 'text', content: 'text', tags: 'text' });
module.exports = mongoose.model('posts', post);