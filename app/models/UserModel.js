const mongoose = require('mongoose'); // Import mongoose
const Schema = mongoose.Schema; // Import Schema

// Khởi tạo cac thông tin trường User
const UserSchame = new Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        require: true,
    },
    dob: {
        type: String,
        default: ""
    },
    created_at: {
        type: Date,
        default: new Date().toLocaleString("en-us")
    }
});

module.exports = mongoose.model('User', UserSchame)