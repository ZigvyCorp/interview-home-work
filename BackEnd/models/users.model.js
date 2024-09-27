import mongoose from 'mongoose'

const User = new mongoose.Schema({
    userId : {
        type : Number
    },
    fullName : {
        type : String ,
        required : true
    },
    avatar : {
        type : String ,
        default : "https://res.cloudinary.com/du6uinlwy/image/upload/v1716912737/TripMates/profile-user_w32qio.png"
    },
} , {timestamps : true})

export default mongoose.model('users' , User)