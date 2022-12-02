const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    tags: [
        {
            type: String,
        },
    ],
    owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
});
PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Post', PostSchema);
