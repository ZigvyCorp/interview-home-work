import makeEndpoint from '../utils/makeEndpoint'
import Comment from '../models/comment'

export default {
  createComment: makeEndpoint(async req => {
    const { owner, post, content } = req.body

    let comment = await Comment.create({ owner, post, content })
    comment = await comment.populate('owner').execPopulate()

    return comment
  }),
}
