import mongoose from 'mongoose'


const userSchema = new mongoose.Schema(
    {
        username: {type:String, requred: true},
        password: {type:String, required: true},
        name: {type:String, required: false},
        dob: {type:String,required:false},
        created_at: {type:Number, required: true}
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('users',userSchema);

export default User