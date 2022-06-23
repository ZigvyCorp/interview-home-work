const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const User = new Schema({
    username: {
        type: 'String',
        trim: true,
        require: true
    },
    password: { 
        type: 'String', 
        trim: true, 
        require: true
    },
    name: { 
        type: 'String' 
    },
    dob: { 
        type: Date
    },
},{
    timestamps:true
});

//HASH password before saving
User.pre('save', async function(next) {
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

module.exports = mongoose.model('User',User);
