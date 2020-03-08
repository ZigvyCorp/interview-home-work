import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

import { DefaultSchemaValues } from '../utils/constants'

const schema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    title: { type: String, default: DefaultSchemaValues.EmptyTitle },
    content: { type: String, default: DefaultSchemaValues.NoContent },
    tags: [String],
    deletedAt: Date,
  },
  { timestamps: true },
)

schema.plugin(uniqueValidator)

export default mongoose.model('Post', schema)
