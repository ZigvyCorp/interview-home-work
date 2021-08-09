const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    "id": Number,
    "username": String,
    "password": String,
    "name": String,
    "dob": String,
    "created_at": {
        "$numberLong": String
    }
})
mongoose.model("user",userSchema)