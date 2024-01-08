import { GET_DB } from '~/config/mongodb'
import { ObjectId} from 'mongodb'
import Joi from 'joi'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

const COMMENT_COLLECTION_NAME = 'comments'

const COMMENT_COLLECTION_SCHEMA = Joi.object({
  content: Joi.string().required().max(1000).min(1),
  post: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  owner: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  created_at: Joi.number().required().default(Date.now())
})


const getCommentPaginationByPostID = async (fillter) => {
  const perPage = parseInt(fillter.query.perPage) || 10
  const page = parseInt(fillter.query.page) || 1

  const commentCollection = GET_DB().collection(COMMENT_COLLECTION_NAME)
  const match = {
    post: new ObjectId(fillter.postID)
  }
  const totalComment = await commentCollection.countDocuments(match)
  const pipeline = [
    { $match: match },
    {
      $lookup: {
        from: 'users',
        localField: 'owner',
        foreignField: '_id',
        as: 'userInfo'
      }
    },
    {
      $project: {
        _id: 1,
        content: 1,
        created_at: 1,
        post: 1,
        userInfo: {
          $arrayElemAt: [
            {
              $map: {
                input: '$userInfo',
                in: { _id: '$$this._id', name: '$$this.name' }
              }
            },
            0
          ]
        }
      }
    },
    { $sort: { created_at: -1 } },
    { $skip: (page - 1) * perPage },
    { $limit: perPage }
  ]

  const comments = await commentCollection.aggregate(pipeline).toArray()

  return {
    comments: comments,
    totalComment: totalComment
  }
}

export const commentModel = {
  getCommentPaginationByPostID,
  COMMENT_COLLECTION_NAME
}