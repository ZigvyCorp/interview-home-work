const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    content: { 
        type: 'String',
    },
    owner:{ type: Schema.Types.ObjectId, ref: 'User' },
    post:{type: Schema.Types.ObjectId, ref: 'Post'}
},{
    timestamps:true
});

module.exports = mongoose.model('Comment',Comment);
