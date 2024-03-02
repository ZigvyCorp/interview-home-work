import mongoose from 'mongoose'
import { IBlog } from '../config/interface'

const blogSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'user' },
  title: {
    type: String,
    require: true,
    trim: true,
    minLength: 6,
    maxLength: 50
  },
  content: {
    type: String,
    require: true,
    minLength: 300
  },
}, {
  timestamps: true
})


export default mongoose.model<IBlog>('blog', blogSchema)