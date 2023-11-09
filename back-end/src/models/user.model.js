const {Schema} = require('mongoose')
const connectionDB = require('../databases/init.mongodb')

const MODEL_USER = "users"

const UserSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    name: {type:String, required: true},
    dob: {type: Date, required: true, default: new Date(Date.now())},
}, {timestamps: true, collection: MODEL_USER})

const UserModel = connectionDB.model(MODEL_USER, UserSchema)

module.exports = {
    UserModel,
    MODEL_USER
}
