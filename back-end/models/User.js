const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id:{
        type: Number,
        required:[true, 'Please provide id']
    },

    username:{
        type: String,
        required: [true, 'Please provide name'],
    },

    password:{
        type: String,
        required: [true, 'Please provide password'],
    },

    name:{
        type:String
    },

    dob:{
        type:String,
    },

    created_at:{
        type: Date
    }

})

module.exports= mongoose.model('User', UserSchema)