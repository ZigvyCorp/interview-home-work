import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment'

mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    owner: {
        type: Number,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true,
    },
    post: {
        type: Number, ref: 'Post',
    },
    content: {
        type: String,
        required: true,
    },
});

autoIncrement.initialize(mongoose.connection);
commentSchema.plugin(autoIncrement.plugin, 'Comment');
export default mongoose.model('Comment', commentSchema);