const mongoose = require('mongoose');
const slugify = require('slugify');
const TimeFormat = require('./../utils/timeFormat');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A post must have a name'],
      unique: true,
      trim: true,
      maxlength: [
        100,
        'A post name must have less or equal than 100 characters'
      ],
      minlength: [10, 'A post name must have more or equal than 10 characters']
    },
    slug: {
      type: String
    },
    content: {
      type: String,
      trim: true,
      required: [true, 'A post must have a content']
    },
    tags: [
      {
        type: String,
        trim: true
      }
    ],
    active: {
      type: Boolean,
      default: true,
      select: false
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'A post must have an author']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true
  }
);

postSchema.index({ slug: 1 });

postSchema.virtual('date').get(function() {
  return TimeFormat.formatVNDate(this.createdAt);
});

postSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'post',
  localField: '_id',
  options: { sort: { createdAt: -1 }, limit: 5}
});

postSchema.pre(/^find/, function(next) {
  this.populate('author', 'name');
  this.populate('comments', 'comment user createdAt');
  this.find({ active: { $ne: false } });
  next();
});

postSchema.pre('save', function(next) {
  const slug = slugify(this.title, {
    remove: /[*+~.()'"!:@]/g,
    lower: true
  });
  const randomNumber = Math.floor(Math.random() * 100);
  this.slug = `${slug}-${randomNumber}`;
  next();
});

postSchema.methods.isAuthor = function(authorID) {
  return this.author._id.equals(authorID)
}

// 3) CREATE A MODEL
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
