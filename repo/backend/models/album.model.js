const mongoose = require('mongoose')

const AlbumSchema = mongoose.Schema(
    {
        userId: {
            type: Number,
            required: [ true, 'postId is required' ],
        },
        id: {
            type: Number,
            required: [ true, 'id is required' ],
        },
        title: {
            type: String,
            required: [ true, 'title is required' ],
        },
    },
    {
        timestamps: true
    }
)

const Album = mongoose.model('Album', AlbumSchema)
module.exports = Album
