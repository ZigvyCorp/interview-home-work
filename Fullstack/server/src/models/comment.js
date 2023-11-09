const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    postId: { type: mongoose.Types.ObjectId, ref: 'post' },
    postUserId: { type: mongoose.Types.ObjectId, ref: 'user' }

}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

//Export the model
module.exports = mongoose.model('Comment', commentSchema);