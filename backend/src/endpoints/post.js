import makeEndpoint from '../utils/makeEndpoint'
import Post from '../models/post'

export default {
  getPosts: makeEndpoint(async req => {
    const { page, amountPerPage, search } = req.query

    const condition = {}
    if (search) {
      condition['$or'] = [
        { title: { $regex: new RegExp(`.*${search}.*`, 'i') } },
        { tags: { $elemMatch: { $regex: new RegExp(`.*${search}.*`, 'i') } } },
      ]
    }

    // const posts = await Post.find(condition)
    //   .sort('-createdAt')
    //   .skip(page * amountPerPage)
    //   .limit(amountPerPage)
    //   .populate('owner', 'name picture')

    const posts = await Post.aggregate([
      {
        $match: condition,
      },
      {
        $lookup: {
          from: 'comments',
          let: { post_id: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$post', '$$post_id'],
                },
              },
            },
            {
              $sort: { updatedAt: -1 },
            },
            {
              $lookup: {
                from: 'users',
                localField: 'owner',
                foreignField: '_id',
                as: 'owner',
              },
            },
            {
              $unwind: {
                path: '$owner',
              },
            },
            {
              $project: {
                post: 0,
              },
            },
          ],
          as: 'comments',
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'owner',
          foreignField: '_id',
          as: 'owner',
        },
      },
      {
        $unwind: {
          path: '$owner',
        },
      },
      {
        $sort: { updatedAt: -1 },
      },
      {
        $skip: page * amountPerPage,
      },
      {
        $limit: amountPerPage,
      },
    ])

    const total = await Post.find(condition).count()

    return { posts, total }
  }),
  getPostById: makeEndpoint(async req => {
    const { postId } = req.params
  }),
}
