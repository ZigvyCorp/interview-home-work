const mongoose = require('mongoose')

const PhotoSchema = mongoose.Schema(
    {
        albumId: {
            type: Number,
            required: [ true, 'albumId is required' ],
        },
        id: {
            type: Number,
            required: [ true, 'id is required' ],
        },
        title: {
            type: String,
            required: [ true, 'title is required' ],
        },
        url: {
            type: String,
            required: [ true, 'url is required' ],
        },
        thumbnailUrl: {
            type: String,
            required: [ true, 'thumbnailUrl is required' ],
        },
    },
    {
        timestamps: true
    }
)

const Photo = mongoose.model('Photo', PhotoSchema)
module.exports = Photo
