const mongoose = require('mongoose')

const ToDoSchema = mongoose.Schema(
    {
        userId: {
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
        completed: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
)

const ToDo = mongoose.model('ToDo', ToDoSchema)
module.exports = ToDo
