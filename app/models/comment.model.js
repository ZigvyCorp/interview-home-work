const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comment = new Schema({

    content: {type: String, require: true},

    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'users', require: true },

    post: { type: mongoose.Schema.Types.ObjectId, ref: 'posts', require: true },

    created_at: { type: Date, require: true, default: new Date }
    
})

module.exports = mongoose.model('comments', comment);