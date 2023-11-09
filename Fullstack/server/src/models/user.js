const mongoose = require('mongoose'); // Erase if already required
import bcrypt from 'bcrypt';
import crypto from 'crypto';


// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },


    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
    },


    refreshToken: {
        type: String
    },

    passwordVerifyEmail: {
        type: String
    },
    otp: {
        type: String
    },


}, {
    timestamps: true
});

// hash pasword trước khi lưu
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    const salt = bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods = {
    // kiểm tra password khi đăng nhập
    isCorrectPassword: async function (password) {

        return await bcrypt.compare(password, this.password)
    },
    // reset password
    createPasswordChangedToken: function () {

        const resetToken = crypto.randomBytes(32).toString('hex')
        this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex")
        this.passwordResetExpire = Date.now() + 5 * 60 * 1000
        return resetToken
    },

}

//Export the model
module.exports = mongoose.model('User', userSchema);