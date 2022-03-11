import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment'

mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
    owner: {
        type: Number, ref: 'User',
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true,
    },
    tags: {
        type: [String]
    }
});

autoIncrement.initialize(mongoose.connection);
postSchema.plugin(autoIncrement.plugin, 'Post');
export default mongoose.model('Post', postSchema);