const mongoose = require('mongoose');

let PostSchema = new mongoose.Schema({
  content: { type: String },
  title: { type: String },
  images: [{ type: String }],
  tags: [{ type: String }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true,
  toObject: {
    transform: function (doc, ret) {
      delete ret.__v;
    }
  },
});

module.exports = mongoose.model('Post', PostSchema);
