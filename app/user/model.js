const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Active', 'Locked', 'Pending'],
    default: 'Active'
  },
}, {
  timestamps: true,
  toObject: {
    transform: function (doc, ret) {
      delete ret.__v;
    }
  }
});

UserSchema.pre('save', async function (next) {
  let user = this;
  user.password = await bcrypt.hashSync(user.password, 10);
  next();
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports  = mongoose.model('User', UserSchema);
