const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        require: true,
    },
    password: {
        type: String,
        trim: true,
        require: true,
    },
    name: {
        type: String,
    },
    dob: {
        type: Date,
    },
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

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', UserSchema);
