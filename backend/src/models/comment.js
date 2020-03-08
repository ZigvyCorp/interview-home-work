import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

import { DefaultSchemaValues } from '../utils/constants'

const schema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    content: { type: String, default: DefaultSchemaValues.NoContent },
    deletedAt: Date,
  },
  { timestamps: true },
)

schema.plugin(uniqueValidator)

export default mongoose.model('Comment', schema)
