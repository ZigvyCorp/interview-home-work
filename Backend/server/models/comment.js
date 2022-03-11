import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment'

mongoose.Promise = global.Promise;

const commentSchema = new mongoose.Schema({
    owner: {
        type: Number, ref: 'User',
    },
    post: {
        type: Number, ref: 'Post',
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

autoIncrement.initialize(mongoose.connection);
commentSchema.plugin(autoIncrement.plugin, 'Comment');
export default mongoose.model('Comment', commentSchema);